import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css";
import clsx from "clsx";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Click Sale System",
  description: "Simple Sales Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
