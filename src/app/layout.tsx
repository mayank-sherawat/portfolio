import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayank Sherawat | Full Stack Developer",
  description: "Portfolio of Mayank Sherawat - Computer Science Engineer & Full Stack Developer specializing in Next.js, React, and Node.js.",
  keywords: ["Mayank Sherawat", "Full Stack Developer", "Next.js", "React", "Portfolio"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Mayank Sherawat | Portfolio",
    description: "Check out my full stack development projects and skills.",
    url: "https://your-vercel-link.app", // Update this after you deploy!
    siteName: "Mayank Sherawat Portfolio",
    images: [
      {
        url: "/icon.svg", // You can upload a screenshot of your site to public/ and link it here for a better preview
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}