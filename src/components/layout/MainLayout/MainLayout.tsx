import { type FC, type PropsWithChildren, useState } from 'react';
import Header from './Header/Header.tsx';
import SubHeader from './SubHeader.tsx';
import NavBar from './NavBar/NavBar.tsx';
import Footer from './Footer.tsx';
import SideBar from './SideBar.tsx';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const handleSideBarChange = (isOpen: boolean) => {
    setIsSideBarOpen(isOpen);
  }

  const handleSideBarOpen = () => {
    setIsSideBarOpen(true);
  };

  return (
    <div>
      <Header onSideBarOpen={handleSideBarOpen} />
      <SideBar isOpen={isSideBarOpen} onChange={handleSideBarChange} />
      <nav>
        <SubHeader />
        <NavBar className="max-lg:hidden" />
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
