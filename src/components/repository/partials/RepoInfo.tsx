import { HiOutlineLink } from 'react-icons/hi';
import { RiStarLine, RiGitRepositoryLine } from 'react-icons/ri';
import { GoRepoForked } from 'react-icons/go';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';

import RepoContributors from './RepoContributor';
import ContributionsGraph from './ContributionsGraph';

import TopicChip from '@/components/repository/partials/TopicChip';

const RepoInfo = ({
  repo,
  contributors = [],
}: {
  repo: any;
  contributors?: any[];
}) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {repo.name}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {repo.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 items-center">
          {repo?.language ? (
            <span className="mr-4 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200">
              {repo.language}
            </span>
          ) : null}
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span>{repo?.subscribers_count} subscribers</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span>License: {repo?.license?.name || 'None'}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span>Default branch: {repo?.default_branch}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span>Watchers: {repo?.watchers_count}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <span>Size: {repo?.size} KB</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <li className="col-span-1 flex items-center">
            <RiGitRepositoryLine className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {repo.full_name}
            </span>
          </li>
          <li className="col-span-1 flex items-center">
            <FiUser className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {repo.owner.login}
            </span>
          </li>
          <li className="col-span-1 flex items-center">
            <RiStarLine className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {repo.stargazers_count} stars
            </span>
          </li>
          <li className="col-span-1 flex items-center">
            <GoRepoForked className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {repo.forks_count} forks
            </span>
          </li>
          <li className="col-span-1 flex items-center">
            <FaCircle className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {repo.open_issues_count} open issues
            </span>
          </li>
          <li className="col-span-1 flex items-center">
            <FiCalendar className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </li>
          <li className="col-span-1 flex items-center">
            <HiOutlineLink className="text-gray-400" />
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Topics
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {repo.topics?.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No topics found
            </p>
          )}
          {(repo.topics as string[])?.map(topic => (
            <TopicChip key={topic} topic={topic} />
          ))}
        </div>
      </div>
      <div className="flex flex-col border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
          Contributions
        </h2>
        <ContributionsGraph contributors={contributors} />
        <h2 className="my-4 text-lg font-medium text-gray-900 dark:text-gray-100">
          Contributors
        </h2>
        {contributors.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No contributors found
          </p>
        )}
        <RepoContributors contributors={contributors} />
      </div>
    </div>
  );
};
export default RepoInfo;
