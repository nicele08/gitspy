import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IProfile } from '@/types/user/profile';

const ProfileAvatar = ({
  profile,
  hovered = false,
}: {
  profile: IProfile;
  hovered?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(hovered);

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      onKeyDown={() => setIsHovered(!isHovered)}
    >
      <img
        className="w-12 h-12 rounded-full"
        src={profile.avatar_url}
        alt={profile.name}
      />

      {isHovered && (
        <div className="z-50 min-w-[150px] max-w-[200px] absolute top-full right-0 py-3 bg-white dark:bg-gray-800 border border-gray-300 transition-all duration-300 dark:border-gray-600 rounded shadow-md flex flex-col">
          <h3 className="px-4 text-xl font-semibold truncate mb-4">
            {profile.name}
          </h3>
          <NavLink
            to={`/${profile.login}`}
            className="py-2 px-4 text-black dark:text-white no-underline hover:bg-gray-200  transition-all duration-300 dark:hover:bg-gray-700"
          >
            Dashboard
          </NavLink>
          <NavLink
            to={`/${profile.login}/organizations`}
            className="py-2 px-4 text-black dark:text-white no-underline hover:bg-gray-200  transition-all duration-300 dark:hover:bg-gray-700"
          >
            Organizations
          </NavLink>
          <NavLink
            to={`/${profile.login}/repositories`}
            className="py-2 px-4 text-black dark:text-white no-underline hover:bg-gray-200  transition-all duration-300 dark:hover:bg-gray-700"
          >
            Repositories
          </NavLink>
          <NavLink
            to="/logout"
            className="py-2 px-4 text-black dark:text-white no-underline hover:bg-gray-200  transition-all duration-300 dark:hover:bg-gray-700"
          >
            Logout
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
