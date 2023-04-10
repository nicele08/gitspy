/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../shared/Logo';
import LoginWithGithub from '../shared/buttons/LoginWithGithub';

import { redirectToGitHub } from '@/services/auth/gitHubAuth';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setCredentials(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow w-full">
      <div className="flex items-center justify-center mb-8">
        <Logo />
        <Link to="/" className="pl-4">
          <h1 className="text-4xl font-bold">GitSpy</h1>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-sm w-full bg-white dark:bg-gray-950 rounded-lg shadow-md p-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign in to GitSpy
        </h2>
        <LoginWithGithub onClick={redirectToGitHub} />
        <div className="flex items-center justify-center my-4">
          <div className="border-b w-full border-gray-300 dark:border-gray-700" />
          <div className="text-gray-500 dark:text-gray-400 mx-2">
            OR
          </div>
          <div className="border-b w-full border-gray-300 dark:border-gray-700" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
          Enter your GitSpy credentials.
        </p>
        <div className="mb-4">
          <label htmlFor="username" className="block font-bold mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChangeInput}
            className="w-full border border-gray-300 outline-none p-2 rounded-lg dark:bg-slate-800 dark:border-slate-900"
            required
            aria-autocomplete="none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChangeInput}
            className="w-full border border-gray-300 outline-none p-2 rounded-lg dark:bg-slate-800 dark:border-slate-900"
            required
            aria-autocomplete="none"
          />
        </div>
        <button
          type="submit"
          className="mt-4 opacity-70 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg dark:bg-blue-800 dark:hover:bg-blue-600"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
