import type { FC } from "react";
import Icon from "./Icon.tsx";
import { faCog, faFolder, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Sidebar.module.css";
import type { CollectionEntry } from "astro:content";
import SidebarContent from "./SidebarContent.tsx";

interface SidebarProps {
  posts: CollectionEntry<'posts'>[];
  pathname: string;
}

const Sidebar: FC<SidebarProps> = ({ posts, pathname }) => {
  return (
    <>
      <div className={styles.sidebarNav}>
        <button className={styles.sidebarNavButton}>
          <Icon icon={faFolder} />
        </button>
        <button className={styles.sidebarNavButton}>
          <Icon icon={faSearch} />
        </button>
        <button className={styles.sidebarNavButton}>
          <Icon icon={faCog} />
        </button>
      </div>
      <SidebarContent posts={posts} pathname={pathname} />
    </>
  );
};

export default Sidebar;
