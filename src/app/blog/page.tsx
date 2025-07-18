
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <h1>블로그 포스트 목록</h1>
      <ul>
        {allPostsData.map(({ slug, date, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
            <br />
            <small>
              {date}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
