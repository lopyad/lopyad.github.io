'use client';

import Link from 'next/link';
import {useState} from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar2nd = () => {
        if(isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    return (
        <>
            <aside className="sidebar-1st">
                <div className="sidebar-section-1st">
                    <button onClick={toggleSidebar2nd}>=</button>
                </div>
            </aside>
            {(isOpen && <aside className="sidebar-2nd">
                <div className="sidebar-section">
                    <h3 className="sidebar-title">EXPLORER</h3>
                    <ul className="sidebar-nav">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">All Posts</Link></li>
                        <li><Link href="/categories">Categories</Link></li>
                        <li><Link href="/tags">Tags</Link></li>
                    </ul>
                </div>
                {/*/!* You can add more sections here, e.g., Recent Posts, About Me *!/*/}
                {/*<div className="sidebar-section">*/}
                {/*  <h3 className="sidebar-title">RECENT POSTS</h3>*/}
                {/*  <ul className="sidebar-nav">*/}
                {/*    <li><Link href="/blog/my-first-blog">My First Blog</Link></li>*/}
                {/*    <li><Link href="/blog/my-second-blog">My Second Blog</Link></li>*/}
                {/*    <li><Link href="/blog/test-post">Test Post</Link></li>*/}
                {/*  </ul>*/}
                {/*</div>*/}
            </aside>)}

        </>
    );
}
