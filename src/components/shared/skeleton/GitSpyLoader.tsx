import SkeletonElement from './SkeletonElement';

import MainLayout from '@/components/layouts/MainLayout';

const GitSpyLoader = () => {
  return (
    <MainLayout>
      <div className="w-full px-4 md:px-8 py-3 flex flex-col space-y-4">
        <div className="w-full flex items-center space-x-4 mb-8">
          <SkeletonElement className="rounded-full h-12 w-12" />
          <div className="justify-between flex items-center space-x-2 flex-grow">
            <SkeletonElement className="h-4 rounded w-1/2" />
            <SkeletonElement className="rounded-full h-12 w-12" />
          </div>
        </div>
        <SkeletonElement className="h-64 w-full rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 p-4 space-y-4"
            >
              <SkeletonElement className="h-4 rounded w-full" />
              <SkeletonElement className="h-20 rounded w-full" />
              <div className="space-y-2">
                <SkeletonElement className="h-4 rounded w-1/2" />
                <SkeletonElement className="h-4 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default GitSpyLoader;
