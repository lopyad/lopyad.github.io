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
import SidebarNav from "@/component/SidebarNav";
import SidebarContentSection from "@/component/SidebarContentSection";

export default function Sidebar({content}: SidebarProps) {
    const pathname = usePathname();

    const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);
    const [sidebarContent, setSidebarContent] = useState(EXAMPLE_none);
    const [sidebarContentType, setSidebarContentType] = useState(ContentType.FILE_EXPLORER);

    useEffect(() => {
        changeSidebarContent(sidebarContentType, pathname);
        setIsSidebarContentOpen(true);
    }, [pathname]);

    const changeSidebarContent =
        (contentType:ContentType, pathname: string) => {
        if(sidebarContentType === contentType)
            setIsSidebarContentOpen(!isSidebarContentOpen);
        else if(!isSidebarContentOpen)
            setIsSidebarContentOpen(!isSidebarContentOpen);

        setSidebarContentType(contentType);

        if(contentType === ContentType.SEARCH)
            setSidebarContent(EXAMPLE_none);
        else if(contentType === ContentType.FILE_EXPLORER)
            if(pathname === "/")
                setSidebarContent((EXAMPLE_homeSidebarContent))
            else if(pathname === "/blog" || pathname.startsWith("/blog/"))
                setSidebarContent(content);
    };

    return (
        <>
        <SidebarNav onClick={changeSidebarContent}/>
        {isSidebarContentOpen &&
            <SidebarContentSection sidebarContent={sidebarContent} pathname={pathname}/>}
        </>
    );
}
