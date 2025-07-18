
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

// process.cwd()는 프로젝트의 루트 디렉터리 경로를 반환합니다.
const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // /content/blog 디렉터리에 있는 파일명을 모두 가져옵니다.
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map(fileName => {
    // 파일명에서 ".md"를 제거하여 slug를 구합니다.
    const slug = fileName.replace(/\.md$/, '');

    // Markdown 파일을 문자열로 읽어옵니다.
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter를 사용해 포스트의 메타데이터 섹션을 파싱합니다.
    const matterResult = matter(fileContents);

    // 추출된 데이터와 slug를 합칩니다.
    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
      content: matterResult.content,
    };
  });

  // 포스트를 날짜순으로 정렬합니다.
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter를 사용해 포스트의 메타데이터 섹션을 파싱합니다.
  const matterResult = matter(fileContents);

  // remark를 사용해 마크다운을 HTML 문자열로 변환합니다.
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 데이터를 slug 및 contentHtml과 합칩니다.
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
