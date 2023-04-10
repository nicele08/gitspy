import useSWR from 'swr';

import API from '../api/api';

export const gitFetcher = async (path: string) => {
  return API.github
    .get(path)
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
