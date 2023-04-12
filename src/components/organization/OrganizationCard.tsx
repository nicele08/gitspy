import { Link } from 'react-router-dom';

import { OrganizationCardProps } from '@/types/github/repo';

const OrganizationCard = ({
  data,
}: {
  data: OrganizationCardProps;
}) => {
  const {
    login,
    description,
    avatar_url: avatar,
    url,
    repos_url: reposUrl,
  } = data;
  return (
    <Link
      to={`/organizations/${login}/repositories`}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
    >
      <div className="p-4">
        <div className="flex items-center flex-wrap gap-1">
          <img
            src={avatar}
            alt={login}
            className="w-8 h-8 rounded-full mr-2"
          />
          <h3 className="text-xl font-semibold">{login}</h3>
        </div>
        {description ? (
          <p className="text-gray-600 dark:text-gray-400">
            {description}
          </p>
        ) : null}
      </div>
    </Link>
  );
};

export default OrganizationCard;
