import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '@/components/contexts/AuthContext';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import Overview from '@/components/profile/Overview';
import { useGitFetcher } from '@/services/fetcher/github';
import DataLayout from '@/components/layouts/DataLayout';
import RepositoryList from '@/components/repository/RepositoryList';
import OrganizationList from '@/components/organization/OrganizationList';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const {
    data: repos,
    isLoading: loadingRepo,
    isError: errorRepo,
  } = useGitFetcher(
    `/search/repositories?q=user:${profile?.login}&sort=updated&per_page=3&page=1`,
  );

  const {
    data: orgs,
    isLoading: loadingOrg,
    isError: errorOrg,
  } = useGitFetcher(`/user/orgs?per_page=6&page=1`);

  return (
    <DashboardLayout
      onSearch={q => {
        navigate(`/repositories?q=${q}`);
      }}
    >
      <Overview profile={profile} />
      <div className="flex flex-col py-6">
        <div className="mb-6 flex items-center space-x-3 justify-between">
          <h3 className="text-lg sm:text-2xl">Your Repositories</h3>
          <Link
            to="/repositories"
            className="whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md"
          >
            View all
          </Link>
        </div>
        <DataLayout isLoading={loadingRepo} isError={errorRepo}>
          {!repos?.total_count && !loadingRepo ? (
            <p className="text-gray-600 dark:text-gray-400">
              You don&apos;t have any repositories yet. Or maybe you
              have a private repository.
            </p>
          ) : (
            <RepositoryList data={repos?.items || []} />
          )}
        </DataLayout>
      </div>

      <div className="flex flex-col py-6">
        <div className="mb-6 flex items-center space-x-3 justify-between">
          <h3 className="text-lg sm:text-2xl">Your Organizations</h3>
          <Link
            to="/organizations"
            className="whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-md"
          >
            View all
          </Link>
        </div>
        <DataLayout isLoading={loadingOrg} isError={errorOrg}>
          {!orgs?.length && !loadingOrg ? (
            <p className="text-gray-600 dark:text-gray-400">
              You don&apos;t have any organizations yet. Or maybe this
              app is not installed to your organization.
            </p>
          ) : (
            <OrganizationList data={orgs || []} />
          )}
        </DataLayout>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
