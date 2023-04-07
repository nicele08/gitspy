import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden text-sm">
      {children}
    </div>
  );
};

export default MainLayout;
