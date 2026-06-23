import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cellcustody.in"),
  title: {
    default: "Cell Custody — Doorstep Mobile Repair in Nagpur",
    template: "%s | Cell Custody",
  },
  description:
    "Instant doorstep mobile repair in Nagpur. Lowest prices, guaranteed repair, technician at your door. Book your slot now.",
  openGraph: {
    title: "Cell Custody — Doorstep Mobile Repair in Nagpur",
    description:
      "Instant doorstep mobile repair in Nagpur. Lowest prices, guaranteed repair, technician at your door.",
    url: "https://www.cellcustody.in",
    siteName: "Cell Custody",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cell Custody — Doorstep Mobile Repair in Nagpur",
    description:
      "Instant doorstep mobile repair in Nagpur. Lowest prices, guaranteed repair, technician at your door.",
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#FF7A1A",
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
