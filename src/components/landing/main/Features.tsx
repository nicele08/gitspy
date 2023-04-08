import { Link } from 'react-router-dom';

import Constants from '@/utils/constants';

const Features = () => {
  return (
    <div
      id="features"
      className="w-full px-8 flex flex-col items-center py-16 bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 from-gray-200 to-gray-300"
    >
      <h2 className="text-3xl font-bold max-w-4xl mx-auto w-full">
        Unlock the Power of Git with GitSpy&apos;s Robust Features
      </h2>
      <div className="max-w-7xl mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Constants.features.map(feature => (
          <div key={feature.name} className="flex items-center mb-4">
            <feature.Icon className="text-gray-500 mr-4" size={32} />
            <div>
              <h3 className="text-lg font-bold mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/login"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg dark:bg-blue-800 dark:hover:bg-blue-600"
      >
        Get started
      </Link>
    </div>
  );
};

export default Features;
