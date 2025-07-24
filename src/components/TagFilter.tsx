import { type FC } from 'react';
import { useTagStore } from '../stores/tagStore';
import styles from '../styles/TagFilter.module.css';

interface TagFilterProps {
  allTags: string[];
}

const TagFilter: FC<TagFilterProps> = ({ allTags }) => {
  const { selectedTags, addTag, removeTag, clearTags } = useTagStore();

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      removeTag(tag);
    } else {
      addTag(tag);
    }
  };

  return (
    <div className={styles.tagFilterContainer}>
      <div className={styles.tagList}>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {selectedTags.length > 0 && (
        <button onClick={clearTags} className={styles.clearButton}>
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default TagFilter;
