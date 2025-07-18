import type { Metadata } from "next";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "gh blog",
  description: "lopyad gh blog",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html>
      <body>
        <h1>layout</h1>
        {children}
      </body>
    </html>
  );
}
