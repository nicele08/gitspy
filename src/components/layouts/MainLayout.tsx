import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden text-sm bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {children}
    </div>
  );
};

export default MainLayout;
