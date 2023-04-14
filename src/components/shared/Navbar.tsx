import ProfileAvatar from '../landing/header/ProfileAvatar';

import SearchBar from './SearchBar';

import Logo from '@/components/shared/Logo';
import SideMenu from '@/components/shared/menu/SideMenu';
import { useAuth } from '@/components/contexts/AuthContext';
import ToggleTheme from '@/components/shared/ToggleTheme';
import Constants from '@/utils/constants';

const Navbar = () => {
  const { profile } = useAuth();
  let navigationItems = Constants.dashboardMenu;

  if (profile) {
    navigationItems = navigationItems.map(item => {
      if (item.name === 'Dashboard') {
        return {
          ...item,
          href: `/${profile.login}`,
        };
      }
      return item;
    });
  }
  return (
    <div className="border-b border-slate-200 dark:border-slate-600 top-0 sticky flex flex-col items-center py-2 px-4 sm:px-6 md:px-8 w-full bg-slate-100 dark:bg-slate-900 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl w-full overflow-x-hidden overflow-y-hidden">
        <div className="flex md:hidden items-center mr-3">
          <SideMenu navItems={navigationItems} />
          <Logo />
        </div>
        <div className="flex flex-grow">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-2 md:space-x-3 ml-2 md:ml-4 shrink-0">
          <ToggleTheme />
          {profile && <ProfileAvatar profile={profile} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
