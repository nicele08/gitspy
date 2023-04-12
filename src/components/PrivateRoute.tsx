import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';

import RepositoryPage from '../pages/RepositoryPage';
import ReportPage from '../pages/ReportPage';
import NotFoundPage from '../pages/NotFoundPage';

import { useAuth } from './contexts/AuthContext';

import LogoutPage from '@/pages/LogoutPage';
import ProfilePage from '@/pages/ProfilePage';
import RepositoriesPage from '@/pages/RepositoriesPage';
import OrganizationsPage from '@/pages/OrganizationsPage';
import Secure from '@/utils/storage/secureLs';
import Keys from '@/utils/appConstants/keys';

const PrivateRoute = () => {
  const { profile } = useAuth();
  const { pathname } = useLocation();

  if (!profile) {
    Secure.set(Keys.REDIRECT_KEY, pathname);
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/organizations" element={<OrganizationsPage />} />
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/:login" element={<ProfilePage />} />
      <Route
        path="/organizations/:org/repositories"
        element={<RepositoryPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoute;
