import type { FC, PropsWithChildren } from 'react';
import Header from './Header/Header.tsx';
import SubHeader from './SubHeader.tsx';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <nav>
        <SubHeader />
        <div>Navbar</div>
      </nav>
      <main>
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
