import DataLoader from './DataLoader';
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
        <DataLoader />
      </div>
    </MainLayout>
  );
};

export default GitSpyLoader;
