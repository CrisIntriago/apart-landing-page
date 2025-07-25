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
    <html lang="es">
      <head>
        <meta name="google" content="notranslate" />
        <meta charSet="UTF-8" />
      </head>
      <body className="antialiased bg-[#EAEEFE]">
        <div id="menu-portal" />
        {children}
      </body>
    </html>
  );
}
