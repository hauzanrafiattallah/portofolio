import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Hauzan Rafi Attallah | Full Stack Developer",
  description:
    "Full Stack Developer crafting beautiful, performant web experiences. Specializing in React, Next.js, and modern web technologies. Let's build something amazing together.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Hauzan Rafi Attallah",
  ],
  authors: [{ name: "Hauzan Rafi Attallah" }],
  openGraph: {
    title: "Hauzan Rafi Attallah | Full Stack Developer",
    description:
      "Full Stack Developer crafting beautiful, performant web experiences.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
