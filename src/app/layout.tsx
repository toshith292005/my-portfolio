import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Venkat Sai Toshith Aleti | Full-Stack Developer & Systems Engineer",
  description: "Portfolio of Venkat Sai Toshith Aleti, a startup-ready engineer focused on scalable systems, SaaS, and cybersecurity. Building high-performance distributed systems.",
  keywords: ["Full-Stack Developer", "Systems Engineer", "Cloud Architect", "Cybersecurity", "Next.js", "Kubernetes", "Docker"],
  authors: [{ name: "Venkat Sai Toshith Aleti" }],
  openGraph: {
    title: "Venkat Sai Toshith Aleti | Systems Builder",
    description: "Building scalable systems and high-performance SaaS products.",
    url: "https://toshith.dev",
    siteName: "Toshith Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkat Sai Toshith Aleti | Systems Builder",
    description: "Building scalable systems and high-performance SaaS products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} antialiased selection:bg-primary/30`}>
        <LoadingScreen />
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
