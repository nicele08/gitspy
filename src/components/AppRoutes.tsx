import { preload } from 'swr';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect, useRef } from 'react';

import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';

import PrivateRoute from './PrivateRoute';
import ScrollToTop from './shared/ScrollToTop';
import { useAuth } from './contexts/AuthContext';
import GitSpyLoader from './shared/skeleton/GitSpyLoader';

import { gitFetcher, useGitFetcher } from '@/services/fetcher/github';

preload('/user', gitFetcher);

const AppRoutes = () => {
  const { setProfile } = useAuth();
  const { data, isLoading } = useGitFetcher('/user');
  const onChangeProfile = useRef(() => {});
  onChangeProfile.current = () => {
    setProfile(data);
  };
  useEffect(() => {
    onChangeProfile.current();
  }, [data]);

  if (isLoading) return <GitSpyLoader />;

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<LoginPage authenticated={!!data} />}
        />
        <Route
          path="/*"
          element={<PrivateRoute authenticated={!!data} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
