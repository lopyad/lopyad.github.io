import {getAllPostSlugs, getPostData} from '@/lib/postManager';
// import type { Metadata } from 'next';
import "./page.css"

// 빌드 시점에 생성할 페이지 경로 목록을 Next.js에 알려줍니다.
export function generateStaticParams() {
    const [result, err] = getAllPostSlugs();
    if(err != null){
        return [];
    }
    else{
        return result;
    }
}

// // 페이지의 메타데이터(예: 브라우저 탭 제목)를 동적으로 설정합니다.
// export async function generateMetadata(props: {params: tParams}): Promise<Metadata> {
//   const slug = (await props.params).slug;
//   const postData = await getPostData(slug);
//   return {
//     title: postData.title,
//   };
// }


type tParams = Promise<{ slug: string }>;
export default async function Page(props: { params: tParams }) {
    const slug = (await props.params).slug;
    const [postData, err] = await getPostData(slug);
    if(err != null){
        return <>{err.message}</>
    }

    return (
        <article>
            <h1 className={"blog-title"}>{postData.metadata.title}</h1>
            <div className={"blog-time"}>
                {postData.metadata.date}
            </div>
            <hr/>
            <div className={"markdown-content"} dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    );
}