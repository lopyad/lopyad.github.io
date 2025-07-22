export interface SidebarItem {
    label: string;
    type: "folder" | "file";
    href?: string;
    children?: SidebarItem[];
    active?: boolean;
}

export interface SidebarContent {
    title: string;
    items: SidebarItem[];
}

// export interface SidebarContents {
//     sections: {[key: string]:SidebarContent};
// }
export interface SidebarProps {
    content: SidebarContent;
}

export enum ContentType {
    NONE= "none",
    FILE_EXPLORER= "fileExplorer",
    SEARCH= "search",
    SETTING= "setting"
}

export const EXAMPLE_none: SidebarContent = {
    title: "None example",
    items: [
        { label: "None", type: "file" },
    ],
};

export const EXAMPLE_homeSidebarContent: SidebarContent = {
       title: "Quick Access",
       items: [
         { label: "Blog Home", type: "file", href:
            "/blog", active: false },
         { label: "About Me", type: "file", href:
            "/about", active: false },
         { label: "Contact", type: "file", href:
            "/contact", active: false },
       ],
};

export const EXAMPLE_blogSidebarContent: SidebarContent = {
    title: "Blog Explorer",
    items: [
        {
            label: "typescript",
            type: "folder",
            children: [
                {
                    label: "first-project",
                    type: "folder",
                    children: [
                        { label: "helloworld.md", type: "file", href:
                                "/blog/typescript/first-project/helloworld", active: false
                        },
                        { label: "another-ts-post.md", type: "file",
                            href: "/blog/typescript/first-project/another-ts-post",
                            active: false },
                    ],
                },
            ],
        },
        {
            label: "javascript",
            type: "folder",
            children: [
                { label: "es6-features.md", type: "file", href:
                        "/blog/javascript/es6-features", active: false },
            ],
        },
        { label: "my-first-blog.md", type: "file", href:
                "/blog/my-first-blog", active: false },
    ],
};
