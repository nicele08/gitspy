import { useNavigate } from 'react-router-dom';

import MainLayout from '@/components/layouts/MainLayout';
import ToggleTheme from '@/components/shared/ToggleTheme';
import Secure from '@/utils/storage/secureLs';
import { useAuth } from '@/components/contexts/AuthContext';
import Keys from '@/utils/appConstants/keys';

const LogoutPage = () => {
  const navigate = useNavigate();
  const { setProfile } = useAuth();
  const handleLogout = () => {
    Secure.removeGithubAccessData();
    Secure.remove(Keys.USER_DATA);
    setProfile(null);
    navigate('/login', { replace: true });
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100  transition-all duration-300 dark:bg-gray-900">
        <div className="bg-white  transition-all duration-300 dark:bg-gray-800 shadow-md rounded p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800  transition-all duration-300 dark:text-gray-200">
            Are you sure you want to log out?
          </h2>
          <ToggleTheme />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Log Out
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800  transition-all duration-300 dark:text-gray-200 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LogoutPage;
