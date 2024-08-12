import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Manga Nest</h1>
      {/* <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm font-medium bg-gray-300 dark:bg-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button> */}
    </header>
  );
};

export default Header;
