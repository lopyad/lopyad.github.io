'use client';

import Link from 'next/link';
import { useState } from "react";
import { PostPreview } from '@/types/post'; // PostPreview 타입 임포트
import './Sidebar.css'; // CSS Modules 임포트

interface SidebarProps {
  posts: PostPreview[];
}

export default function Sidebar({ posts }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar2nd = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <aside className="sidebar-1st">
                <div className="sidebar-section-1st">
                    <button onClick={toggleSidebar2nd}>=</button>
                </div>
            </aside>
            <aside className={`sidebar-2nd ${!isOpen ? 'hidden' : ''}`}>
                    <div className="sidebar-section">
                        <h3 style={{ fontSize: '12px', color: '#888', padding: '0 10px' }}>content/blog/</h3>
                        <ul>
                            {posts.length === 0 ? (
                                <li style={{ padding: '0 10px' }}>No posts found or failed to load.</li>
                            ) : (
                                posts.map(post => (
                                    <li key={post.slug}>
                                        <Link href={`/blog/${post.slug}`}>
                                            📄 {post.metadata.title}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </aside>
        </>
    );
}

