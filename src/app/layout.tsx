import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinu - Hemanthsai K",
  description: "Backend engineer working on interesting projects",
  metadataBase: new URL("https://chinu.dev"),
  openGraph: {
    title: "Chinu - Hemanthsai K",
    description: "Backend engineer working on interesting projects",
    url: "https://chinu.dev",
    siteName: "chinu.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Chinu - Hemanthsai K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinu - Hemanthsai K",
    description: "Backend engineer working on interesting projects",
    creator: "@chinudotdev",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
