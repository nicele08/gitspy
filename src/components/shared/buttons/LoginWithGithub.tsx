import { MouseEvent } from 'react';
import { FaGithub } from 'react-icons/fa';

const LoginWithGithub = ({
  onClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {},
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 sm:px-6 py-2 rounded-lg  dark:bg-blue-800  transition-all duration-300 dark:hover:bg-blue-600"
    >
      <FaGithub size={16} className="mr-1" />
      Log in with Github
    </button>
  );
};

export default LoginWithGithub;
