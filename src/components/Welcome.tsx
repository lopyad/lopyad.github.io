import type { FC } from 'react';
import styles from '../styles/Welcome.module.css';

const Welcome: FC = () => {
    return (
        <div className={styles.container}>
            <a href="/blog" className={styles.card}>
                <h2>Blog</h2>
                <p>Read my latest posts.</p>
            </a>
            <a href="/about" className={styles.card}>
                <h2>About</h2>
                <p>Learn more about me.</p>
            </a>
            <a href="/game" className={styles.card}>
                <h2>Game</h2>
                <p>Play various games</p>
            </a>
        </div>
    );
};

export default Welcome;
