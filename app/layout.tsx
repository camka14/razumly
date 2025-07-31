import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Razumly MVP - Sports Event Management',
  description: 'Join and organize sports events with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Razumly MVP
            </Link>
            <div className="space-x-4">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
