import { FiSearch, FiCode, FiStar } from 'react-icons/fi';

const UIPreview = () => {
  return (
    <section
      id="offers"
      className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 py-16 w-full px-8 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-white dark:text-gray-100 text-center mb-8 max-w-4xl mx-auto w-full">
        See What GitSpy Has to Offer
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        <div className="max-w-md mx-auto md:mx-0 md:mr-16 mb-8 md:mb-0">
          <div className="text-white dark:text-gray-100 text-center">
            <FiSearch
              size={64}
              className="inline-block mb-4 animate-pulse"
            />
            <h3 className="text-2xl font-bold mb-2">
              Search Repositories
            </h3>
            <p className="text-lg">
              Find any repository on Github quickly and easily.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto md:mx-0 md:mr-16 mb-8 md:mb-0">
          <div className="text-white dark:text-gray-100 text-center">
            <FiCode
              size={64}
              className="inline-block mb-4 animate-pulse"
            />
            <h3 className="text-2xl font-bold mb-2">Code Explorer</h3>
            <p className="text-lg">
              Browse through code files and view commit history.
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto md:mx-0">
          <div className="text-white dark:text-gray-100 text-center">
            <FiStar
              size={64}
              className="inline-block mb-4 animate-pulse"
            />
            <h3 className="text-2xl font-bold mb-2">
              Favorite Repositories
            </h3>
            <p className="text-lg">
              Save your favorite repositories for easy access later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIPreview;
