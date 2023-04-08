import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/shared/ScrollToTop';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={<PrivateRoute authenticated={authenticated} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
