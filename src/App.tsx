import AppProviders from './components/AppProviders';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};

export default App;
