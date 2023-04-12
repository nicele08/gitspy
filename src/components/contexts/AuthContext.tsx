import {
  useState,
  useMemo,
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

import { IProfile } from '@/types/user/profile';
import { isAuthWithGitHub } from '@/services/auth/gitHubAuth';
import Secure from '@/utils/storage/secureLs';
import Keys from '@/utils/appConstants/keys';
import { useGitSWRMutation } from '@/services/fetcher/github';

interface IAuth {
  profile: IProfile | null;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>;
}

export const defaultValue: Readonly<IAuth> = {
  profile: null,
  setProfile() {},
};

export const AuthContext = createContext<IAuth>(defaultValue);
export const useAuth = () => {
  return useContext(AuthContext);
};

interface IAuthProvider {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const userJSONData = Secure.get(Keys.USER_DATA);
  const userData = userJSONData ? JSON.parse(userJSONData) : null;
  const [profile, setProfile] = useState<IProfile | null>(userData);
  const { data: user, trigger } = useGitSWRMutation('/user');

  const syncAuth = useRef(() => {});
  syncAuth.current = () => {
    if (isAuthWithGitHub()) {
      if (!profile) {
        trigger();
      }
    } else {
      Secure.remove(Keys.USER_DATA);
      Secure.removeGithubAccessData();
      setProfile(null);
    }
  };

  useEffect(() => {
    syncAuth.current();
  }, []);

  useEffect(() => {
    if (user) {
      setProfile(user);
      Secure.set(Keys.USER_DATA, JSON.stringify(user));
    }
  }, [user]);

  const value = useMemo(() => {
    return {
      profile,
      setProfile,
    };
  }, [profile]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
