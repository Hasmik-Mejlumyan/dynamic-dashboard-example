import type { FC } from 'react';
import type { ISideBarProps } from './types.ts';
import Button from '../../UI/Button/Button.tsx';
import { X } from 'lucide-react';
import useDarkMode from '../../../hooks/useDarkMode.ts';

const SideBar: FC<ISideBarProps> = ({
  isOpen = false,
  onChange = () => {}
}) => {
  const { theme, changeTheme } = useDarkMode();

  const handleClose = () => {
    onChange(false);
  };

  const handleOverlayClick = () => {
    onChange(false);
  };

  return (
    isOpen && <aside className="fixed top-0 right-0 w-full h-full bg-gray-700/60 z-[9999]" onClick={handleOverlayClick}>
      <div className="flex flex-col items-end h-full">
        <div
          className="max-w-[17.5rem] w-full bg-background-navbar h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between py-6 px-4 border-b border-border-color">
            <h4 className="font-medium text-text-color">Settings</h4>
            <Button
              variant="secondary"
              className="rounded-full size-6 !p-2 flex items-center justify-center"
              icon={<X size={14} />}
              onClick={handleClose}
            />
          </div>
          <div className="flex-1 p-6">
            <span className="text-sm text-text-color mb-2">Mode</span>
            <div className="flex items-center gap-1">
              <Button
                className="!ring-0"
                variant={theme === 'light' ? 'primary' : 'secondary'}
                onClick={() => changeTheme('light')}
              >
                Light
              </Button>
              <Button
                className="!ring-0"
                variant={theme === 'dark' ? 'primary' : 'secondary'}
                onClick={() => changeTheme('dark')}
              >
                Dark
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
