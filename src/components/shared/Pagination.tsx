/* eslint-disable sonarjs/no-duplicate-string */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { memo } from 'react';

const RenderPageButton = ({
  pageNumber = 1,
  active = false,
  onChange = () => {},
}) => {
  return (
    <button
      type="button"
      className={`${
        active
          ? 'bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900'
          : 'text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
      } px-3 py-1 rounded-md transition-colors duration-200`}
      onClick={onChange}
    >
      {pageNumber}
    </button>
  );
};

const RenderEllipsisButton = () => {
  return (
    <button
      type="button"
      className="text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-1 rounded-md transition-colors duration-200 cursor-default"
      disabled
      aria-disabled="true"
    >
      &hellip;
    </button>
  );
};

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange = (page: number) => {},
  pageNeighbors = 1,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function handlePageChange(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }

    onPageChange(pageNumber);
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  function renderPages() {
    const totalPagesInRange = pageNeighbors * 2 + 1;
    const pages = [];

    if (totalPagesInRange >= totalPages) {
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push(i);
      }
    } else if (currentPage <= pageNeighbors + 1) {
      for (let i = 1; i <= totalPagesInRange; i += 1) {
        pages.push(i);
      }
      if (!(pages as any[]).includes('ellipsis')) {
        pages.push('ellipsis');
      }
      pages.push(totalPages);
    } else if (currentPage >= totalPages - pageNeighbors) {
      pages.push(1);
      if (!(pages as any[]).includes('ellipsis')) {
        pages.push('ellipsis');
      }
      for (
        let i = totalPages - totalPagesInRange + 1;
        i <= totalPages;
        i += 1
      ) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (!(pages as any[]).includes('ellipsis')) {
        pages.push('ellipsis');
      }
      for (
        let i = currentPage - pageNeighbors;
        i <= currentPage + pageNeighbors;
        i += 1
      ) {
        pages.push(i);
      }
      if (!pages.includes('ellipsis')) {
        pages.push('ellipsis');
      }
      pages.push(totalPages);
    }

    return pages.map(page => {
      if (typeof page === 'string') {
        return <RenderEllipsisButton key={`${page}_ellipsis`} />;
      }

      return (
        <RenderPageButton
          key={`page_${page}`}
          active={currentPage === page}
          pageNumber={page}
          onChange={() => handlePageChange(page)}
        />
      );
    });
  }

  return (
    <div className="flex justify-center">
      <nav className="inline-flex space-x-1 shadow-sm">
        <button
          type="button"
          className={`${
            isFirstPage
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-default'
              : 'text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
          } px-3 py-1 rounded-l-md transition-colors duration-200 rounded-md disabled:cursor-not-allowed`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Previous page"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>
        {renderPages()}
        <button
          type="button"
          className={`${
            isLastPage
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-default'
              : 'text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
          } px-3 py-1 rounded-r-md transition-colors duration-200 rounded-md disabled:cursor-not-allowed`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Next page"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
};

export default memo(Pagination);
