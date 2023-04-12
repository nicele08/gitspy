import SkeletonElement from './SkeletonElement';

const DataLoader = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md bg-white  transition-all duration-300 dark:bg-gray-800 p-4 space-y-4"
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
  );
};

export default DataLoader;
