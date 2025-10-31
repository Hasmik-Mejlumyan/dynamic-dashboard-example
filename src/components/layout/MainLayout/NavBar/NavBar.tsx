import NavBarItem from './NavBarItem.tsx';

import { navBarItems } from '../../../../constants/navBarItems.ts';

const NavBar = () => {
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
    <div className="-mt-[2.375rem]">
      <div className="container">
        <ul className="flex items-center bg-background-navbar rounded text-text-color-main shadow-[0_-3px_31px_0_#0000000d,0_6px_20px_0_#00000005]">
          {navBarContent}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
