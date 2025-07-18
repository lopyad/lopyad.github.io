import { getAllPostSlugs, getPostData } from '../../../../lib/posts';
// import type { Metadata } from 'next';

// 빌드 시점에 생성할 페이지 경로 목록을 Next.js에 알려줍니다.
export async function generateStaticParams() {
  return getAllPostSlugs();
}

// // 페이지의 메타데이터(예: 브라우저 탭 제목)를 동적으로 설정합니다.
// export async function generateMetadata(props: {params: tParams}): Promise<Metadata> {
//   const slug = (await props.params).slug;
//   const postData = await getPostData(slug);
//   return {
//     title: postData.title,
//   };
// }


type tParams = Promise<{slug: string}>;
export default async function Page( props: {params: tParams}) {
  const slug = (await props.params).slug;
  const postData = await getPostData(slug);

  return (
    <article>
      <h1>{postData.title}</h1>
      <div>
        {postData.date}
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}