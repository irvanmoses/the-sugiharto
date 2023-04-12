import React, { ReactNode } from 'react';

import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: ReactNode[] | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
