import type { FC, PropsWithChildren } from 'react';
import Header from './Header/Header.tsx';
import SubHeader from './SubHeader.tsx';
import NavBar from './NavBar/NavBar.tsx';
import Footer from './Footer.tsx';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <nav>
        <SubHeader />
        <NavBar />
      </nav>
      <main className="pt-7 pb-6 bg-background-body">
        <div className="container">
          {/* Could be <Outlet /> from "react-router-dom" */}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default MainLayout;
