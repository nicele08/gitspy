const SkeletonElement = ({ className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200  transition-all duration-300 dark:bg-gray-700 ${className}`}
    />
  );
};

export default SkeletonElement;
