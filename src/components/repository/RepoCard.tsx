import { RepoCardProps } from '@/types/github/repo';

const RepoCard = ({ data }: { data: RepoCardProps }) => {
  const { name, description, owner, html_url: htmlUrl } = data;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center flex-wrap gap-1">
            <img
              src={owner.avatar_url}
              alt={owner.login}
              className="w-8 h-8 rounded-full mr-2"
            />
            <a
              href={owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 max-w-[100px] truncate"
            >
              {owner.login}
            </a>
          </div>
          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-1 lg:py-2 px-2 lg:px-4 rounded"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
