import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        404
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Oops! It looks like the page you were looking for does not
        exist.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
