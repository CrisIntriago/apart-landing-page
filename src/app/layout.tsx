import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apart - La realidad es flexible",
  description: "Cambia tu vida, aprende inglés",
  openGraph: {
    images: `${process.env.NEXT_PUBLIC_CDN_URL}LandingPagepreview.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#EAEEFE] font-guru">
        <div id="menu-portal" />
        {children}
      </body>
    </html>
  );
}
