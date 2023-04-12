import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import Logo from '../Logo';

import Constants from '@/utils/constants';

const SideMenu = ({ navItems = Constants.publicMenu }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebar = React.useRef<HTMLDivElement>(null);
  const trigger = React.useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen]);

  return (
    <>
      <button
        type="button"
        ref={trigger}
        className="md:hidden  transition-all duration-300 dark:text-white mr-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars size={32} />
      </button>
      <div
        id="sidebar"
        ref={sidebar}
        className={`bg-gray-200 flex md:hidden flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 dark:bg-gray-950 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'invisible -translate-x-64'
        }`}
      >
        <div className="flex px-10 py-3">
          <Logo />
        </div>
        <div className="flex flex-col mt-4 flex-grow items-start space-y-4">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `cursor-pointer uppercase px-10 py-3 ${
                  isActive
                    ? 'text-gray-800  transition-all duration-300 dark:text-white font-bold'
                    : 'text-gray-600  transition-all duration-300 dark:text-gray-200 font-medium'
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
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(SideMenu);
