import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Inter } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metalberg Inc.",
  description:
    "Trusted Manufacturer and Exporter of Fine Metal Handicrafts and Home Decor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
