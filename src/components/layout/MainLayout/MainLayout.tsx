import type { FC, PropsWithChildren } from 'react';
import Header from './Header/Header.tsx';
import SubHeader from './SubHeader.tsx';
import NavBar from './NavBar/NavBar.tsx';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <nav>
        <SubHeader />
        <NavBar />
      </nav>
      <main className="pt-7 bg-background-body">
        <div className="container">
          {/* Could be <Outlet /> from "react-router-dom" */}
          {children}
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
};

export default MainLayout;
