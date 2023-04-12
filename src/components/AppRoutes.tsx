import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';

import PrivateRoute from './PrivateRoute';
import ScrollToTop from './shared/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
