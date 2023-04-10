import { NavLink } from 'react-router-dom';

import Logo from '@/components/shared/Logo';
import Constants from '@/utils/constants';
import SideMenu from '@/components/shared/menu/SideMenu';
import LoginWithGithub from '@/components/shared/buttons/LoginWithGithub';
import { redirectToGitHub } from '@/services/auth/gitHubAuth';

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
      <LoginWithGithub onClick={redirectToGitHub} />
    </header>
  );
};

export default Header;
