import React from 'react';
import {
  FaUser,
  FaUsers,
  FaCodeBranch,
  FaCode,
  FaStar,
} from 'react-icons/fa';

import { IProfile } from '@/types/user/profile';

const Overview = ({ profile }: { profile?: IProfile | null }) => {
  return (
    <>
      {/* User Profile */}
      <div className="flex flex-col space-y-2 md:space-x-3 md:flex-row items-start md:justify-between mb-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <img
            className="w-24 md:w-32 h-24 md:h-32 rounded-full mr-4"
            src={profile?.avatar_url}
            alt={profile?.login}
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{profile?.name}</h1>
            <a
              className="text-blue-500 hover:underline"
              href={profile?.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{profile?.login}
            </a>
            {profile?.bio ? (
              <p className="text-gray-600 mt-2">{profile?.bio}</p>
            ) : null}
          </div>
        </div>
        {profile?.blog ? (
          <a
            className="whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            href={profile.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        ) : null}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-md shadow-md">
          <div className="flex items-center mb-4 flex-wrap gap-2">
            <FaCodeBranch size={24} className="text-gray-600 mr-2" />
            <span className="text-gray-600 whitespace-normal">
              Public Repositories
            </span>
          </div>
          <div className="text-2xl font-bold">
            {profile?.public_repos}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-md shadow-md">
          <div className="flex items-center mb-4 flex-wrap gap-2">
            <FaCode className="text-gray-600 mr-2" />
            <span className="text-gray-600 whitespace-normal">
              Public Gists
            </span>
          </div>
          <div className="text-2xl font-bold">
            {profile?.public_gists}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-md shadow-md">
          <div className="flex items-center mb-4 flex-wrap gap-2">
            <FaUser className="text-gray-600 mr-2" />
            <span className="text-gray-600 whitespace-normal">
              Followers
            </span>
          </div>
          <div className="text-2xl font-bold">
            {profile?.followers}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-md shadow-md">
          <div className="flex items-center mb-4 flex-wrap gap-2">
            <FaUsers className="text-gray-600 mr-2" />
            <span className="text-gray-600 whitespace-normal">
              Following
            </span>
          </div>
          <div className="text-2xl font-bold">
            {profile?.following}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
