import RepoCard from './RepoCard';

import { RepoCardProps } from '@/types/github/repo';

const RepositoryList = ({
  data = [],
}: {
  data?: RepoCardProps[] | [];
}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(repo => (
        <RepoCard key={repo.id} data={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
