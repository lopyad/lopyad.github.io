import Link from 'next/link';
import { getSortedPostsData } from '@/lib/postManager';

export default function BlogPage() {
  const [allPostsData, error] = getSortedPostsData();

  if (error) {
    return (
      <section>
        <h1>블로그 포스트를 불러오는 중 에러가 발생했습니다.</h1>
        <p>{error.message}</p>
      </section>
    );
  }

  if (!allPostsData || allPostsData.length === 0) {
    return (
      <section>
        <h1>작성된 포스트가 없습니다.</h1>
        <p>첫 번째 포스트를 작성해보세요!</p>
      </section>
    );
  }

  return (
    <section>
      <h1>블로그 포스트 목록</h1>
      <ul>
        {allPostsData.map(({ slug, metadata }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{metadata.title}</Link>
            <br />
            <small>{metadata.date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
