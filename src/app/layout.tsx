import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";


export const metadata: Metadata = {
  title: "Apart - La realidad es flexible",
  description: "Cambia tu vida, aprende inglés",
  openGraph: {
    images: `${process.env.CDN_URL}BannerApart2.png`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#EAEEFE] font-guru"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
