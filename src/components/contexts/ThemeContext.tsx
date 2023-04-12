import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

import { getInitialTheme } from '@/utils/theme';
import Secure from '@/utils/storage/secureLs';
import Keys from '@/utils/appConstants/keys';

export interface ITheme {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  toggleTheme: () => void;
}

export const defaultValue: Readonly<ITheme> = {
  theme: getInitialTheme(),
  setTheme() {},
  toggleTheme() {},
};

export const ThemeContext = createContext<ITheme>(defaultValue);
export const useTheme = () => {
  return useContext(ThemeContext);
};
interface IProps {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    getInitialTheme(),
  );

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      Secure.set(Keys.APP_THEME_KEY, newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  const value = useMemo(() => {
    return { theme, setTheme, toggleTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
