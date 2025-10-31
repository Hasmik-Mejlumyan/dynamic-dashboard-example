import type { FC } from 'react';
import type { INavBarItem } from '../../../../constants/navBarItems';

const NavBarItem: FC<INavBarItem> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <li>
      <a className="px-6 py-5 flex flex-col items-center hover:text-primary" href={href}>
        <Icon className="size-4" />
        <span className="text-sm">
          {label}
        </span>
      </a>
    </li>
  );
};

export default NavBarItem;
