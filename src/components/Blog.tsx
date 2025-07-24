import type { FC } from 'react';
import styles from '../styles/Blog.module.css';

// Define the type for a single post based on the Astro content collection
interface Post {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    description: string;
  };
}

interface BlogProps {
  posts: Post[];
}

const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <main className={styles.container}>
      <h1>블로그</h1>
      <p>Astro로 만든 블로그의 최신 글 목록입니다.</p>
      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.slug} className={styles.postItem}>
            <a href={`/blog/${post.slug}`}>
              <h2 className={styles.postTitle}>{post.data.title}</h2>
              <p className={styles.postDate}>
                {new Date(post.data.pubDate).toLocaleDateString('ko-KR')}
              </p>
              <p className={styles.postDescription}>{post.data.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
