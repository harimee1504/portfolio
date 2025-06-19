import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Harikrishnan's Portfolio",
  description: "Harikrishnan's Portfolio Website built with Next.js",
  icons: {
    icon: [
      {
        url: "/icon-small.png",
        href: "/icon-small.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased transition-all duration-300 ease-in-out`}
      >
        <div className="transition-opacity duration-300 ease-in-out">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
