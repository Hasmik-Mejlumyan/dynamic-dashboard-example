import type { FC } from 'react';

import { Bell, Cog, Maximize } from 'lucide-react';
import HeaderLanguageSelect from './HeaderLanguageSelect.tsx';
import HeaderSearch from './HeaderSearch.tsx';

import Button from '../../../UI/Button/Button.tsx';
import Avatar from '../../../UI/Avatar/Avatar.tsx';

import type { IHeaderProps } from '../types.ts';

const Header: FC<IHeaderProps> = ({ onSideBarOpen }) => {

  return (
    <header className="bg-background-header text-header-item-color">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="w-[4.5rem]">
            <img className="w-full block" src="/images/logo-dark.png" alt="Lexa"/>
            {/* TODO: Add light logo */}
          </div>
          <div className="flex items-center justify-end gap-3 flex-1">
            <HeaderSearch />
            <HeaderLanguageSelect />
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
        </div>
      </div>
    </header>
  )
};

export default Header;
