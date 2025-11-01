import { type FC, useState } from 'react';

import { Bell, Cog, Maximize, Menu } from 'lucide-react';
import HeaderLanguageSelect from './HeaderLanguageSelect.tsx';
import HeaderSearch from './HeaderSearch.tsx';

import Button from '../../../UI/Button/Button.tsx';
import Avatar from '../../../UI/Avatar/Avatar.tsx';

import type { IHeaderProps } from '../types.ts';
import NavBar from '../NavBar/NavBar.tsx';

const Header: FC<IHeaderProps> = ({ onSideBarOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleToggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header className="relative bg-background-header text-header-item-color max-lg:z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="w-[4.5rem] max-md:size-6 mr-3 max-sm:hidden">
              <img className="w-full block max-md:hidden" src="/images/logo-light.png" alt="Lexa" />
              <img className="w-full max-md:block hidden" src="/images/logo-dark-mobile.png" alt="Lexa" />
            </div>
            <Button
              className="max-lg:block hidden"
              variant="icon"
              icon={<Menu />}
              onClick={handleToggleNav}
            />
          </div>
          <div className="flex items-center justify-end gap-3 flex-1">
            <HeaderSearch/>
            <HeaderLanguageSelect/>
            <Button
              variant="icon"
              icon={<Maximize />}
            />
            {/* TODO: Make Bell with dropdown (Create component for that) and badge for count | move to a separate component with its logic */}
            <Button
              variant="icon"
              icon={<Bell />}
            />
            <Avatar src="/images/static/people/misty.jpg" size="lg" />
            <Button
              className="animate-spin"
              variant="icon"
              icon={<Cog />}
              onClick={onSideBarOpen}
            />
          </div>
          {isNavOpen && <NavBar className="max-lg:block hidden absolute left-0 top-full !-mt-0 w-full"/>}
        </div>
      </div>
    </header>
  )
};

export default Header;
