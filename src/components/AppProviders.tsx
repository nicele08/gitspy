import React from 'react';

import AuthProvider from './contexts/AuthContext';

const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
