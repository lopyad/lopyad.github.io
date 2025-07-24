import { type FC } from 'react';
import styles from '../styles/Blog.module.css';
import TagFilter from './TagFilter';
import { useTagStore } from '../stores/tagStore';
// import type { ImageMetadata } from 'astro'; // Remove ImageMetadata import

// Define the type for a single post based on the Astro content collection
interface Post {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    description: string;
    tags?: string[];
    thumbnail?: string; // Change thumbnail type back to string
  };
}

interface BlogProps {
  posts: Post[];
  allTags: string[];
  defaultImageSrc: string; // Add defaultImageSrc prop
}

const Blog: FC<BlogProps> = ({ posts, allTags, defaultImageSrc }) => {
  const { selectedTags } = useTagStore();

  const filteredPosts = selectedTags.length === 0
    ? posts
    : posts.filter(post =>
        post.data.tags && selectedTags.every(tag => post.data.tags?.includes(tag))
      );

  return (
    <main className={styles.container}>
      <h1>Lopyad Blog</h1>
      {/* <p>Astro로 만든 블로그의 최신 글 목록입니다.</p> */}
      <TagFilter allTags={allTags} />
      <ul className={styles.postList}>
        {filteredPosts.map(post => (
          <li key={post.slug} className={styles.postItem}>
            <a href={`/blog/${post.slug}`}>
              <img 
                src={post.data.thumbnail || defaultImageSrc} 
                alt={post.data.title} 
                className={styles.postThumbnail} 
              />
              <div className={styles.postContent}>
                <h2 className={styles.postTitle}>{post.data.title}</h2>
                <p className={styles.postDate}>
                  {new Date(post.data.pubDate).toLocaleDateString('ko-KR')}
                </p>
                <p className={styles.postDescription}>{post.data.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
