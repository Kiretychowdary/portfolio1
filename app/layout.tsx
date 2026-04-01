import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirety Chowdary Manne | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Kirety Chowdary Manne — Full Stack Developer specializing in MERN stack, AI integrations, and scalable web applications. B.Tech CSE at Vignan University.",
  keywords: [
    "Kirety Chowdary",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "AI Developer",
    "Node.js",
    "Portfolio",
    "Vignan University",
  ],
  authors: [{ name: "Kirety Chowdary Manne" }],
  openGraph: {
    title: "Kirety Chowdary Manne | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack with AI integrations. Check out my projects and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="grid-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
