'use client'; // This component needs client-side interactivity (useState)

import React, {useState} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder, faFolderOpen, faFileLines, faChevronRight, faChevronDown} from '@fortawesome/free-solid-svg-icons'; // 아이콘 추가
import {SidebarItem} from '@/types/Sidebar';

interface SidebarTreeItemProps {
    item: SidebarItem;
    currentPathname: string;
    indentationLevel?: number;
}

export default function SidebarTreeItem(
    {item, currentPathname, indentationLevel = 1}: SidebarTreeItemProps) {
    const isActive = item.type === 'file' && item.href === currentPathname;
    const [isExpanded, setIsExpanded] = useState(true);

    const handleFolderClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleFolderClick();
        }
    };

    const itemPaddingLeft = `calc(var(--indent-unit) * ${indentationLevel})`;

    return (
        <li>
            {item.type === "folder" ? (
                <>
                    <div
                        className="sidebar-folder-header"
                        onClick={handleFolderClick}
                        onKeyDown={handleKeyDown}
                        role="button"
                        aria-expanded={isExpanded}
                        tabIndex={0}
                        style={{paddingLeft: itemPaddingLeft}} // 들여쓰기 스타일 적용
                    >
                        <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight}
                                         className="folder-toggle-icon"/>
                        <FontAwesomeIcon icon={isExpanded ? faFolderOpen : faFolder} className="sidebar-icon"/>
                        {item.label}
                    </div>
                    {isExpanded && item.children && (
                        <ul className="sidebar-sub-nav">
                            {item.children.map((childItem, index) => (
                                <SidebarTreeItem
                                    key={index}
                                    item={childItem}
                                    currentPathname={currentPathname}
                                    indentationLevel={indentationLevel + 1} // 자식에게 들여쓰기 레벨 증가하여 전달
                                />
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <Link
                    href={item.href || '#'}
                    className={`sidebar-nav-link ${isActive ? "active" : ""}`}
                    style={{paddingLeft: itemPaddingLeft}} // 들여쓰기 스타일 적용
                >
                    <FontAwesomeIcon icon={faFileLines} className="sidebar-icon"/>
                    {item.label}
                </Link>
            )}
        </li>
    );
}