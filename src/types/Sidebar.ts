export interface SidebarItem {
    label: string;
    type: "folder" | "file";
    href?: string;
    children?: SidebarItem[];
    active?: boolean;
}

export interface SidebarSection {
    title: string;
    items: SidebarItem[];
}

// export interface SidebarProps {
//     sections: SidebarSection[];
//     currentPath: string;
// }
export interface SidebarProps {
    section: SidebarSection
    currentPath: string;
}