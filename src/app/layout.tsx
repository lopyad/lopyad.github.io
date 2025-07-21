import type {Metadata} from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import FooterBar from "./component/FooterBar";

// Font Awesome CSS를 전역적으로 임포트
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import {getAllPostSlugs} from "@/lib/postManager";
import {SidebarSection} from "@/types/Sidebar";
// Font Awesome이 CSS를 자동으로 주입하는 것을 막고 수동으로 제어
config.autoAddCss = false;

export const metadata: Metadata = {
    title: "gh blog",
    description: "lopyad gh blog",
};

export default function RootLayout(
    {children}: Readonly<{ children: React.ReactNode; }>) {

    const section: SidebarSection = {title: "dd", items:[]};
    const [result, err] = getAllPostSlugs();
    if(err != null){

    } else {
        result?.map(({slug}) => {
            section.items.push({
                label: slug,
                type: "file",
                href: "/"+slug
            });
        });
    }

    return (
        <html lang="en">
        <body>
        <div className="app-container">
            <Navbar/>
            <div className="main-container">
                <Sidebar section={section} currentPath={"/blog"}/>
                <main className="content-area">
                    {children}
                </main>
            </div>
            <FooterBar/>
        </div>
        </body>
        </html>
    );
}