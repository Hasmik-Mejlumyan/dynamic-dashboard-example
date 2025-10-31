import Button from '../../../UI/Button/Button.tsx';
import { Bell, Cog, Maximize } from 'lucide-react';
import Avatar from '../../../UI/Avatar/Avatar.tsx';
import HeaderLanguageSelect from './HeaderLanguageSelect.tsx';
import HeaderSearch from './HeaderSearch.tsx';

const Header = () => {
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
            <Avatar size="lg" />
            <Button
              className="animate-spin"
              variant="icon"
              icon={<Cog />}
            />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
