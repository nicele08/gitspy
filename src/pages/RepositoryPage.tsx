import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSWRConfig } from 'swr';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useGitFetcher } from '@/services/fetcher/github';
import DataLayout from '@/components/layouts/DataLayout';
import RepoInfo from '@/components/repository/partials/RepoInfo';

const RepositoryPage = () => {
  const { mutate } = useSWRConfig();

  const { repo: repoName, login } = useParams();
  const {
    data: repo = {},
    isLoading: loadingRepo,
    isError: errorRepo,
  } = useGitFetcher(`/repos/${login}/${repoName}`);

  const { data: contributors = [] } = useGitFetcher(
    `/repos/${repo?.owner?.login}/${repo?.name}/stats/contributors`,
  );
  const processedContributors = Array.isArray(contributors)
    ? contributors.filter(contributor => contributor.total > 0)
    : [];
  // Sort contributors by number of commits in descending order
  processedContributors.sort((a, b) => b.total - a.total);

  const onMutateContributors = useRef(() => {});
  onMutateContributors.current = () => {
    if (repo && !contributors?.length) {
      mutate(
        `/repos/${repo?.owner?.login}/${repo?.name}/stats/contributors`,
      );
    }
  };

  useEffect(() => {
    onMutateContributors.current();
  }, [repo, contributors]);

  return (
    <DashboardLayout>
      <DataLayout isLoading={loadingRepo} isError={errorRepo}>
        <RepoInfo repo={repo} contributors={processedContributors} />
      </DataLayout>
    </DashboardLayout>
  );
};

export default RepositoryPage;
