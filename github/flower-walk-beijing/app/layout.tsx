import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flower Walk Beijing",
  description: "北京市城市花卉漫游与美育平台"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
