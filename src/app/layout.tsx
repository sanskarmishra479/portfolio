import type { Metadata } from "next";
import { Instrument_Serif, Geist_Mono, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const instrumentSerif = Instrument_Serif({
  variable: "--font-InstrumentSerif",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geistMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanskar Mishra",
  description: "Sanskar Mishra's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", instrumentSerif.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
