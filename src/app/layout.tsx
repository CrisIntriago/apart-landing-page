import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Apart - La realidad es flexible",
  description: "Cambia tu vida con el inglés",
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
