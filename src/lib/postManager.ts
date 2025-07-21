
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';
import {isMetadata, Metadata, Post, PostPreview, postPath} from "@/types/post";
import {Result} from "@/types/type";

// export type Result<T, E> = [T, null] | [null, E];
const postsDirectory = path.join(process.cwd(), postPath);

export function getSortedPostsData(): Result<PostPreview[], Error> {
  try {
    const fileNames = fs.readdirSync(postsDirectory);

    // map 대신 reduce를 사용하여 유효한 포스트만 필터링하고 변환합니다.
    const allPostsData = fileNames.reduce((acc: PostPreview[], fileName) => {
      try {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const metadata = matterResult.data;

        // 메타데이터 유효성 검사
        if (!isMetadata(metadata)) {
          // 에러를 던져서 아래 catch 블록에서 잡도록 함
          throw new Error(`Invalid or missing metadata`);
        }

        // 유효한 경우, 누적 배열에 추가
        acc.push({
          slug,
          metadata,
        });

      } catch (e) {
        // 개별 파일 처리 중 에러 발생 시, 콘솔에 경고를 출력하고 건너뜁니다.
        console.warn(`[Skipping Post] Failed to process ${fileName}:`, e instanceof Error ? e.message : String(e));
      }
      
      return acc; // 다음 순회를 위해 누적 배열을 반환
    }, []); // 초기값은 빈 PostPreview 배열

    // 유효한 포스트들만 날짜순으로 정렬
    const sortedData = allPostsData.sort((a, b) => {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    });

    return [sortedData, null];

  } catch (error) {
    // 디렉터리 읽기 등 전체 프로세스에서 에러 발생 시
    if (error instanceof Error) {
      return [null, error];
    }
    return [null, new Error('An unknown error occurred while reading sorted posts data.')];
  }
}

export function getAllPostSlugs(): Result<{ slug: string }[], Error> {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    
    const slugs = fileNames.map(fileName => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      };
    });

    return [slugs, null]; // 성공 시, 슬러그 배열과 null을 반환

  } catch (error) {
    // 에러 발생 시, null과 Error 객체를 반환
    if (error instanceof Error) {
        return [null, error];
    }
    return [null, new Error('An unknown error occurred while reading post slugs.')];
  }
}

export async function getPostData(slug: string): Promise<Result<Post, Error>> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter를 사용해 포스트의 메타데이터 섹션을 파싱합니다.
  const matterResult = matter(fileContents);
  const metadata = matterResult.data;
  if(!isMetadata(metadata)){
    return [null, new Error(`invalid or missing metadata in file: ${slug}.md`)];
  }

  // remark를 사용해 마크다운을 HTML 문자열로 변환합니다.
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 데이터를 slug 및 contentHtml과 합칩니다.
  return [{
    slug: slug,
    contentHtml: contentHtml,
    metadata: metadata,
  }, null];
}
