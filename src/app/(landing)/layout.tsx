import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Layout;
