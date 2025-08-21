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

export const metadata = {
  title: "Sarvesh Bhanarkar | Interactive Terminal Portfolio",
  description: "MERN Stack Developer showcasing projects through an interactive terminal interface.",
  keywords: ["developer", "portfolio", "MERN stack", "JavaScript", "React", "Terminal", "Sarvesh Bhanarkar"],
  authors: [{ name: "Sarvesh Bhanarkar" }],
  creator: "Sarvesh Bhanarkar",
  openGraph: {
    title: "Sarvesh Bhanarkar | Interactive Terminal Portfolio",
    description: "Explore my projects and skills through an interactive terminal interface",
    url: "https://bxbx1205.vercel.app",
    siteName: "Sarvesh Bhanarkar Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/pfp.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvesh Bhanarkar | Developer Portfolio",
    description: "MERN Stack Developer showcasing projects through an interactive terminal interface",
    creator: "@bxbx1205",
    images: [{ url: "/pfp.png" }],
  },
  icons: {
    icon: "/pfp.png",
    apple: "/pfp.png",
    shortcut: "/pfp.png",
  },
  metadataBase: new URL("https://bxbx1205.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/pfp.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
