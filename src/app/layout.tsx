import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import FooterBar from "./component/FooterBar";
import { getSortedPostsData } from "@/lib/postManager"; // getSortedPostsData 임포트

// Font Awesome CSS를 전역적으로 임포트
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Font Awesome이 CSS를 자동으로 주입하는 것을 막고 수동으로 제어
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "gh blog",
  description: "lopyad gh blog",
};

export default async function RootLayout(
    {children}: Readonly<{children: React.ReactNode;}>) {

  const [allPostsData, err] = getSortedPostsData();
  if (err != null) {
    console.error("Failed to load sorted posts data in layout:", err);
  }

  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Navbar />
          <div className="main-container">
            <Sidebar posts={allPostsData || []} />
            <main className="content-area">
              {children}
            </main>
          </div>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}