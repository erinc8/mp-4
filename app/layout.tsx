import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from './components/Header';
import "./globals.css";

// Font configuration
const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

// Metadata configuration
export const metadata: Metadata = {
    title: "Message Board",
    description: "A simple message board built with Next.js",
};

// Root layout component
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="p-4">
            {children}
        </main>
        </body>
        </html>
    );
}
