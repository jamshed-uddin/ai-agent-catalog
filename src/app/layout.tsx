import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Agent Index",
  description: "AI Agents Index: Discover your next Automation wizard",
};
const ibmPlex = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.className} antialiased lg:max-w-[100rem] lg:mx-auto mx-2 min-h-screen bg-[rgb(0,0,18)] text-white lg:ml-32 lg:mr-32 `}
      >
        <Navbar />
        <div className="py-16">{children}</div>
      </body>
    </html>
  );
}
