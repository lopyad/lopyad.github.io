'use client';

import {useEffect, useState} from "react";

import "./Sidebar.css";
import {
    ContentType,
    EXAMPLE_blogSidebarContent,
    EXAMPLE_homeSidebarContent,
    EXAMPLE_none,
    SidebarProps
} from "@/types/Sidebar";
import {usePathname} from "next/navigation";
import SidebarTreeItem from "@/component/SidebarTreeItem";
import SidebarNav from "@/component/SidebarNav";
import SidebarContent from "@/component/SidebarContentSection";
import path from "path";
import SidebarContentSection from "@/component/SidebarContentSection";

export default function Sidebar({content}: SidebarProps) {
    const pathname = usePathname();

    const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);
    const [sidebarContent, setSidebarContent] = useState(EXAMPLE_none);
    const [sidebarContentType, setSidebarContentType] = useState(ContentType.NONE);

    useEffect(() => {
        changeSidebarContent(sidebarContentType, pathname);
        // if(pathname === "/")
        //     setSidebarContent(EXAMPLE_homeSidebarContent);
        // else if(pathname === "/blog")
        //     setSidebarContent(content);
    }, [pathname]);

    const changeSidebarContent =
        (contentType:ContentType, pathname: string) => {
        console.log(pathname);
        if(sidebarContentType === contentType)
            setIsSidebarContentOpen(!isSidebarContentOpen);
        else if(!isSidebarContentOpen)
            setIsSidebarContentOpen(!isSidebarContentOpen);

        // console.log(sidebarContentType, contentType);
        setSidebarContentType(contentType);

        if(contentType === ContentType.SEARCH)
            setSidebarContent(EXAMPLE_none);
        else if(contentType === ContentType.FILE_EXPLORER)
            setSidebarContent((EXAMPLE_blogSidebarContent))
    };

    return (
        <>
        <SidebarNav onClick={changeSidebarContent}/>
        {isSidebarContentOpen &&
            <SidebarContentSection sidebarContent={sidebarContent} pathname={pathname}/>}
        </>
    );
}
