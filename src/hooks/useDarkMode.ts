import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage.ts';

export type ThemeType = 'light' | 'dark';

const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeTheme = (theme: ThemeType) => {
    setTheme(theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    changeTheme,
  };
};

export default useDarkMode;
