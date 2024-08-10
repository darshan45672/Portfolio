import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Darshan Bhandary",
  description: "Darshan Bhandary's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preloading the Inter font */}
        <link
          rel="preload"
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
