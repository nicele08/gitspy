import { NavLink } from 'react-router-dom';

import Logo from '@/components/shared/Logo';
import Constants from '@/utils/constants';
import SideMenu from '@/components/shared/menu/SideMenu';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center">
        <SideMenu />
        <Logo />
      </div>
      <nav className="mr-3 lg:mr-6 hidden md:flex justify-end items-center space-x-6">
        {Constants.publicMenu.map(item => (
          <NavLink
            to={item.href}
            key={item.name}
            className={({ isActive }) =>
              `${
                isActive
                  ? 'text-gray-800 dark:text-white font-bold'
                  : 'text-gray-600 dark:text-gray-200 font-medium'
              } text-lg dark:hover:text-gray-200 hover:text-gray-700`
            }
            onClick={event => {
              if (item.href.startsWith('#')) {
                event.preventDefault();
                const element = document.getElementById(
                  item.href.substring(1),
                );
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg dark:bg-blue-800 dark:hover:bg-blue-600"
      >
        Log in with Github
      </button>
    </header>
  );
};

export default Header;
