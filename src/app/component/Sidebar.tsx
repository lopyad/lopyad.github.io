'use client';

import Link from 'next/link';
import {useState} from "react";
import "./Sidebar.css";

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
                </div>
            </aside>)}

        </>
    );
}
