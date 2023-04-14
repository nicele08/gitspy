import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Logo from '../Logo';

import Constants from '@/utils/constants';
import { useAuth } from '@/components/contexts/AuthContext';
import Secure from '@/utils/storage/secureLs';
import Keys from '@/utils/appConstants/keys';

const DashboardNavigationMenu = ({
  navItems = Constants.dashboardMenu,
}) => {
  const { profile } = useAuth();
  const initialStatus = Secure.get(Keys.RESIZE_NAVBAR) === 'true';
  const [sidebarMinimized, setSidebarMinimized] =
    React.useState(initialStatus);
  const sidebar = React.useRef<HTMLDivElement>(null);

  const onClose = () => {
    setSidebarMinimized(false);
  };

  const toggleSidebar = () => {
    setSidebarMinimized(prev => {
      if (prev) {
        Secure.set(Keys.RESIZE_NAVBAR, 'false');
      } else {
        Secure.set(Keys.RESIZE_NAVBAR, 'true');
      }
      return !prev;
    });
  };

  const navigationItems = navItems.map(item => {
    if (item.isPrefix && profile) {
      return {
        ...item,
        href: `/${profile.login}${item.href}`,
      };
    }
    return item;
  });

  return (
    <div
      ref={sidebar}
      className={`shrink-0 px-2 hidden border-r border-gray-300 dark:border-slate-600 w-fit max-w-sm md:flex bg-gray-200 flex-col z-40 left-0 top-0 sticky transform min-h-screen overflow-x-hidden overflow-y-auto no-scrollbar dark:bg-gray-950 transition-all duration-200 ease-in-out ${
        sidebarMinimized ? 'items-center' : ''
      }`}
    >
      <div className="flex mb-4 py-2 items-center">
        <Logo className="transition-all duration-300 dark:bg-gray-600 bg-gray-50 rounded-full p-0.5" />
        {!sidebarMinimized && (
          <NavLink
            to="/"
            className="-translate-y-0.5 text-2xl pl-1 font-black tracking-wide"
          >
            GitSpy
          </NavLink>
        )}
      </div>
      {navigationItems.map(item => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            `mb-2 rounded-xl transition-all duration-300 flex items-center cursor-pointer capitalize px-4 py-2 ${
              isActive
                ? 'text-white dark:text-white font-semibold bg-blue-500 dark:bg-blue-700'
                : 'text-gray-600 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-600 font-medium'
            }`
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
            onClose();
          }}
        >
          <item.Icon size={24} />
          {!sidebarMinimized ? (
            <span className="ml-2">{item.name}</span>
          ) : null}
        </NavLink>
      ))}
      <div className="flex flex-col items-start my-4 px-2 mt-auto">
        <button
          type="button"
          className={`mt-8 transition duration-300 ease-in-out ${
            sidebarMinimized ? 'bg-blue-500' : 'bg-blue-300'
          } hover:bg-blue-400 dark:bg-gray-800 dark:hover:bg-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          onClick={toggleSidebar}
        >
          {sidebarMinimized ? (
            <FiChevronRight className="text-xl" />
          ) : (
            <FiChevronLeft className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default React.memo(DashboardNavigationMenu);
