import { useState, type FC } from "react";
import Icon from "./Icon.tsx";
import { faFileLines, faUser, faBook } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Sidebar.module.css";
import type { CollectionEntry } from "astro:content";

interface SidebarContentProps {
  posts: CollectionEntry<'posts'>[];
  pathname: string;
}

interface HoveredItem {
  top: number;
  left: number;
  width: number;
  title: string;
  url: string;
}

const SidebarContent: FC<SidebarContentProps> = ({ posts, pathname }) => {
  const [hoveredItem, setHoveredItem] = useState<HoveredItem | null>(null);

  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const isBlogPage = pathname.startsWith('/blog');

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, post: CollectionEntry<'posts'>) => {
    const element = e.currentTarget;
    if (element.scrollWidth > element.clientWidth) {
      const rect = element.getBoundingClientRect();
      setHoveredItem({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        title: post.data.title,
        url: `/blog/${post.slug}`,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className={styles.sidebarContent}>
      {isBlogPage ? (
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarSectionHeader}>POSTS</h3>
          <ul className={styles.postList}>
            {sortedPosts.map((post) => {
              const postUrl = `/blog/${post.slug}`;
              const isActive = pathname === postUrl;
              return (
                <li key={post.slug}>
                  <a
                    href={postUrl}
                    className={`${styles.postLink} ${isActive ? styles.active : ''}`}
                    onMouseEnter={(e) => handleMouseEnter(e, post)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Icon icon={faFileLines} className={styles.fileIcon} />
                    <span>{post.data.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.sidebarSection}>
          <h3 className={styles.sidebarSectionHeader}>NAVIGATION</h3>
          <ul className={styles.postList}>
            <li>
              <a href="/blog" className={`${styles.postLink} ${pathname.startsWith('/blog') ? styles.active : ''}`}>
                <Icon icon={faBook} className={styles.fileIcon} />
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.postLink} ${pathname === '/about' ? styles.active : ''}`}>
                <Icon icon={faUser} className={styles.fileIcon} />
                <span>About</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      {hoveredItem && (
        <a 
          href={hoveredItem.url}
          className={`${styles.postLink} ${styles.floatingItem}`}
          style={{
            top: `${hoveredItem.top}px`,
            left: `${hoveredItem.left}px`,
            minWidth: `${hoveredItem.width}px`,
          }}
        >
          <Icon icon={faFileLines} className={styles.fileIcon} />
          <span>{hoveredItem.title}</span>
        </a>
      )}
    </div>
  );
};

export default SidebarContent;
