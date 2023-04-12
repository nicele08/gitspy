import { FaSun, FaMoon } from 'react-icons/fa';

import { useTheme } from '../contexts/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Toggle Dark Mode"
      className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${
        theme === 'dark' ? 'gray-900' : 'white'
      } focus:ring-${theme === 'dark' ? 'gray-700' : 'gray-300'}`}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <FaMoon size={24} className="text-yellow-300" />
      ) : (
        <FaSun size={24} className="text-yellow-800" />
      )}
    </button>
  );
};

export default ToggleTheme;
