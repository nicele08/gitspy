import React from 'react';

import DashboardNavigationMenu from '../shared/menu/DashboardNavigationMenu';
import Navbar from '../shared/Navbar';

const DashboardLayout = ({
  children,
  onSearch = (search: string) => {},
}: {
  children: React.ReactNode;
  onSearch?: (search: string) => void;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-slate-100 dark:bg-slate-900 text-gray-800 transition-all duration-300 dark:text-gray-100 h-screen">
      <DashboardNavigationMenu />
      <div className="flex flex-col flex-grow overflow-y-auto min-h-screen">
        <Navbar onSearch={onSearch} />
        <div className="flex-grow flex flex-col items-center py-3 px-4 sm:px-6 md:px-8 bg-slate-50 dark:bg-slate-950">
          <div className="flex flex-col flex-grow max-w-7xl w-full overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
