import { Route, Routes, Navigate } from 'react-router-dom';

import OrganizationPage from '../pages/OrganizationPage';
import RepositoryPage from '../pages/RepositoryPage';
import ReportPage from '../pages/ReportPage';
import NotFoundPage from '../pages/NotFoundPage';

const PrivateRoute = ({ authenticated = false }) => {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/organizations" element={<OrganizationPage />} />
      <Route
        path="/organizations/:org/repositories"
        element={<RepositoryPage />}
      />
      <Route
        path="/repositories/:repo/reports"
        element={<ReportPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoute;
