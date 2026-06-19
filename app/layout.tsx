import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const display = localFont({
  src: "../public/fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-display",
});

const body = localFont({
  src: "../public/fonts/Inter-Regular.ttf",
  variable: "--font-body",
});

const mono = localFont({
  src: "../public/fonts/JetBrainsMono-Regular.ttf",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cell Custody — Doorstep Mobile Repair in Nagpur",
  description:
    "Instant doorstep mobile repair in Nagpur. Lowest prices, guaranteed repair, technician at your door. Book your slot now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-paper text-ink antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}