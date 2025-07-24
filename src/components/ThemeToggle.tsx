import { useState, useEffect } from 'react';
import type { FC } from 'react';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle: FC = () => {
    const [theme, setThemeState] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setThemeState(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const setTheme = (newTheme: 'light' | 'dark') => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className={styles.toggleContainer}>
            <button 
                onClick={() => setTheme('light')} 
                className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`}
                aria-pressed={theme === 'light'}
            >
                Light
            </button>
            <button 
                onClick={() => setTheme('dark')} 
                className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`}
                aria-pressed={theme === 'dark'}
            >
                Dark
            </button>
        </div>
    );
};

export default ThemeToggle;
