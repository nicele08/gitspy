import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import API from '../api/api';
import APIHeaders from '../api/headers';

export const gitFetcher = async (path: string) => {
  return API.github
    .get(path, {
      headers: APIHeaders.github,
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response?.data || error;
    });
};

export const useGitFetcher = (pathname: string) => {
  const { data, error, mutate } = useSWR(pathname, gitFetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const useGitSWRMutation = (pathname: string) => {
  const { data, error, trigger } = useSWRMutation(
    pathname,
    gitFetcher,
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    trigger,
  };
};
