'use client';

import Link from 'next/link';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder, faCog, faSearch, faFileLines} from '@fortawesome/free-solid-svg-icons';

import "./Sidebar.css";
import {SidebarProps} from "@/types/Sidebar";

export default function Sidebar({section, currentPath}: SidebarProps) {

    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar2nd = () => { setIsOpen(!isOpen); };

    return (
        <>
        <aside className="sidebar-1st">
            <div className="sidebar-section-1st">
                <button onClick={toggleSidebar2nd}>
                    <FontAwesomeIcon icon={faFolder} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </aside>
        {(isOpen && <aside className="sidebar-2nd">
            <div className="sidebar-section">
                <h3 className="sidebar-title">{section.title}</h3>
                {section.items.map((item) => (
                    <li key={item.label}>
                        <Link href={currentPath+item.href}>
                            <FontAwesomeIcon icon={faFileLines} />
                            {" " + item.label}
                        </Link>
                    </li>
                ))}
            </div>
        </aside>)}
        </>
    );
}
