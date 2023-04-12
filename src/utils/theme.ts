import Keys from './appConstants/keys';
import Secure from './storage/secureLs';

export const getInitialTheme = () => {
  const storedTheme = Secure.get(Keys.APP_THEME_KEY);
  if (
    storedTheme === 'dark' ||
    (!storedTheme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    return 'dark';
  }
  document.documentElement.classList.remove('dark');
  return 'light';
};
