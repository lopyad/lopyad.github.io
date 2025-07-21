'use client';

import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faFolder, faSearch} from '@fortawesome/free-solid-svg-icons';

import "./Sidebar.css";
import {
    ContentType,
    EXAMPLE_blogSidebarContent,
    EXAMPLE_homeSidebarContent,
    EXAMPLE_none,
    SidebarProps
} from "@/types/Sidebar";
import {usePathname} from "next/navigation";
import SidebarTreeItem from "@/app/component/SidebarTreeItem";

export default function Sidebar({content}: SidebarProps) {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(true);
    const [sidebarContent, setSidebarContent] = useState(EXAMPLE_none);
    const [sidebarContentType, setSidebarContentType] = useState(ContentType.NONE);

    useEffect(() => {
        if(pathname === "/")
            setSidebarContent(EXAMPLE_homeSidebarContent);
        else if(pathname === "/blog")
            setSidebarContent(EXAMPLE_blogSidebarContent);
    }, [pathname]);

    const changeSidebarContent = (contentType:ContentType) => {
        if(sidebarContentType === contentType)
            setIsOpen(!isOpen);
        else if(!isOpen)
            setIsOpen(!isOpen);

        // console.log(sidebarContentType, contentType);
        setSidebarContentType(contentType);

        if(contentType === ContentType.SEARCH)
            setSidebarContent(EXAMPLE_none);
        else if(contentType === ContentType.FILE_EXPLORER)
            setSidebarContent((EXAMPLE_blogSidebarContent))
    };

    return (
        <>
        <aside className="sidebar-1st">
            <div className="sidebar-1st-content">
                <button onClick={()=>changeSidebarContent(ContentType.FILE_EXPLORER)}>
                    <FontAwesomeIcon icon={faFolder} />
                </button>
                <button onClick={()=>changeSidebarContent(ContentType.SEARCH)}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <button onClick={()=>changeSidebarContent(ContentType.SETTING)}>
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </aside>

        {isOpen &&
        <aside className="sidebar-2nd">
            <div className="sidebar-2nd-content">
                <h3 className="sidebar-title">{sidebarContent.title}</h3>
                {sidebarContent.items.map((item)=>(
                    <SidebarTreeItem key={item.label} item={item} currentPathname={pathname}/>
                ))}
            </div>
        </aside>}
        </>
    );
}
