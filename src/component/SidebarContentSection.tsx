import SidebarTreeItem from "@/component/SidebarTreeItem";
import {ContentType, SidebarContent} from "@/types/Sidebar";

interface SidebarContentSectionProps {
    sidebarContent: SidebarContent;
    pathname: string;
}

export default function SidebarContentSection({ sidebarContent, pathname}: SidebarContentSectionProps) {
    return (
        <aside className="sidebar-2nd">
            <div className="sidebar-2nd-content">
                <h3 className="sidebar-title">{sidebarContent.title}</h3>
                {sidebarContent.items.map((item)=>(
                    <SidebarTreeItem key={item.label} item={item} currentPathname={pathname}/>
                ))}
            </div>
        </aside>
    );
}