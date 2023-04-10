import {
  useState,
  useMemo,
  createContext,
  useContext,
  ReactNode,
} from 'react';

import { IProfile } from '@/types/user/profile';

interface IAuth {
  profile: IProfile | null;
  setProfile: React.Dispatch<React.SetStateAction<null>>;
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
  const [profile, setProfile] = useState(null);

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
