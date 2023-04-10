import MainLayout from '@/components/layouts/MainLayout';

const LogoutPage = () => {
  const handleLogout = () => {
    // Implement your logout logic here.
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Are you sure you want to log out?
          </h2>
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
              // Redirect to the previous page or home
              className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded"
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
