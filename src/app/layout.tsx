import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Apart - La realidad es flexible",
  description: "Cambia tu vida, aprende inglés",
  openGraph: {
    images: 'https://apartcdn.s3.sa-east-1.amazonaws.com/BannerApart3.webp',
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
