import type { FC } from 'react';
import type { INavBarItem } from '../../../../constants/navBarItems';

const NavBarItem: FC<INavBarItem> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <li className="max-lg:w-full">
      <a className="px-6 py-5 flex flex-col items-center hover:text-primary max-lg:flex-row max-lg:justify-start max-lg:py-3 max-lg:px-4 max-lg:gap-4" href={href}>
        <Icon className="size-4" />
        <span className="text-sm">
          {label}
        </span>
      </a>
    </li>
  );
};

export default NavBarItem;
