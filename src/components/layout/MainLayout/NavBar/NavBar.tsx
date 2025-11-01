import NavBarItem from './NavBarItem.tsx';

import { navBarItems } from '../../../../constants/navBarItems.ts';
import type { FC } from 'react';
import type { INavBarProps } from './types.ts';

const NavBar: FC<INavBarProps> = ({ className = '' }) => {
  const navBarContent = (
    navBarItems.map((item) => (
      <NavBarItem
        key={item.href}
        label={item.label}
        href={item.href}
        icon={item.icon}
      />
    ))
  );

  return (
    <div className={`-mt-[2.375rem] ${className}`}>
      <div className="container max-lg:!px-0 max-lg:!mx-0 max-lg:!w-full max-lg:!max-w-[unset]">
        <ul className="flex items-center bg-background-navbar rounded text-text-color-main shadow-[0_-3px_31px_0_#0000000d,0_6px_20px_0_#00000005] max-lg:z-[5000] max-lg:flex-col">
          {navBarContent}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
