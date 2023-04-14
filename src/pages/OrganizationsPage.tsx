import { useNavigate } from 'react-router-dom';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useGitFetcher } from '@/services/fetcher/github';
import DataLayout from '@/components/layouts/DataLayout';
import OrganizationList from '@/components/organization/OrganizationList';

const OrganizationsPage = () => {
  const navigate = useNavigate();
  const {
    data: orgs,
    isLoading: loadingOrg,
    isError: errorOrg,
  } = useGitFetcher(`/user/orgs?per_page=6&page=1`);
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <h3 className="text-lg sm:text-2xl mb-6">
          Your Organizations
        </h3>
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

export default OrganizationsPage;
