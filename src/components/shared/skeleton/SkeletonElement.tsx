const SkeletonElement = ({ className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 ${className}`}
    />
  );
};

export default SkeletonElement;
