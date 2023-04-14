const RepoContributors = ({
  contributors = [],
}: {
  contributors: any[];
}) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {contributors.map(({ author, total }) => (
        <li
          key={author.id}
          className="col-span-1 flex flex-col text-center bg-white dark:bg-gray-900 rounded-lg shadow divide-y divide-gray-200 dark:divide-gray-700"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full"
              src={author.avatar_url}
              alt=""
            />
            <h3 className="mt-6 truncate text-gray-900 dark:text-gray-100 text-sm font-medium">
              {author.login}
            </h3>
            <p className="text-gray-500 mt-3 dark:text-gray-400 text-sm">
              {total} contributions
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href={author.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View profile
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RepoContributors;
