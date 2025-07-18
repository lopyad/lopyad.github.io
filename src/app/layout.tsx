import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

// Font Awesome CSS를 전역적으로 임포트
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Font Awesome이 CSS를 자동으로 주입하는 것을 막고 수동으로 제어
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "gh blog",
  description: "lopyad gh blog",
};

export default function RootLayout(
    {children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <main className="content-area">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}