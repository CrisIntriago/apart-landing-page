// app/layout.tsx
import Navbar from '@/components/navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Navbar/>
    </div>
  );
}

export default Layout;
