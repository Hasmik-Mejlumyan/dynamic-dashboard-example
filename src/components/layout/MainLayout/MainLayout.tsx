import type { FC, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header>
        <div>Main header</div>
        <div>Sub header</div>
      </header>
      <nav>
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
