import { useRef, useEffect, useState } from 'react';
import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { useAuth } from '@/components/contexts/AuthContext';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useGitFetcher } from '@/services/fetcher/github';
import DataLayout from '@/components/layouts/DataLayout';
import RepositoryList from '@/components/repository/RepositoryList';
import Pagination from '@/components/shared/Pagination';

const RepositoriesPage = () => {
  const navigate = useNavigate();
  const { login } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const handleSearch = useRef(() => {});
  const { profile } = useAuth();
  const initialPage = searchParams.get('page') || '1';
  const [page, setPage] = useState(initialPage);
  const [query, setQuery] = useState(`q=user:${login}`);
  const {
    data: repos,
    isLoading: loadingRepo,
    isError: errorRepo,
    mutate,
  } = useGitFetcher(
    `/search/repositories?${query}&sort=updated&per_page=6&page=${page}`,
  );

  handleSearch.current = () => {
    if (initialPage) {
      setPage(initialPage);
    }
    if (q) {
      const repoResults: any[] =
        repos?.items?.filter((item: any) => item.name.includes(q)) ||
        [];
      if (repoResults.length > 0) {
        mutate(
          {
            ...repos,
            items: repoResults,
          },
          { revalidate: false },
        );
      } else if (!loadingRepo) {
        // TODO: handle no results
        setQuery(`q=${q.trim()}+user:${login}`);
        // mutate(repos, { revalidate: true });
      }
    } else {
      setQuery(`q=user:${login}`);
      // mutate(repos, { revalidate: true });
    }
  };

  useEffect(() => {
    handleSearch.current();
  }, [q, initialPage]);

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <h3 className="text-lg sm:text-2xl mb-6">
          Your Repositories
        </h3>
        <DataLayout isLoading={loadingRepo} isError={errorRepo}>
          {!repos?.total_count && !loadingRepo ? (
            <p className="text-gray-600 dark:text-gray-400">
              You don&apos;t have any match repositories yet. Or maybe
              you have a private repository.
            </p>
          ) : (
            <RepositoryList data={repos?.items || []} />
          )}
        </DataLayout>
      </div>
      {repos?.total_count ? (
        <div className="flex flex-col py-6 mt-auto">
          <Pagination
            currentPage={parseInt(page, 10) || 1}
            pageNeighbors={1}
            totalPages={
              repos?.total_count
                ? Math.ceil(repos.total_count / 6)
                : 1
            }
            onPageChange={newPage => {
              setPage(newPage.toString());
              let pageQuery = `?page=${newPage}`;
              if (q) {
                pageQuery += `&q=${q}`;
              }
              navigate(pageQuery);
            }}
          />
        </div>
      ) : null}
    </DashboardLayout>
  );
};

export default RepositoriesPage;
