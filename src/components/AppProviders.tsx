import React from 'react';

import AuthProvider from './contexts/AuthContext';
import ThemeProvider from './contexts/ThemeContext';

const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
