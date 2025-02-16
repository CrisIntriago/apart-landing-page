import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
