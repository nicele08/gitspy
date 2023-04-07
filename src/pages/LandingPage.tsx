import React from 'react';

import MainLayout from '@/components/layouts/MainLayout';
import Logo from '@/components/shared/Logo';

const LandingPage = () => {
  return (
    <MainLayout>
      <div className="m-auto p-8">
        <Logo />
      </div>
    </MainLayout>
  );
};

export default LandingPage;
