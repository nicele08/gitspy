import API from '../api/api';

import Secure from '@/utils/storage/secureLs';
import Keys from '@/utils/appConstants/keys';

export const redirectToGitHub = () => {
  window.location.href = `${Keys.APP_API_URL}/github/login`;
};

export const getGitHubToken = (code: string) => {
  return API.default.get(`/github/token?code=${code}`);
};

export const isAuthWithGitHub = (
  data = Secure.getGithubAccessData(),
) => {
  if (!data?.accessToken) {
    return false;
  }
  try {
    const expiresIn = parseInt(data.expiresIn, 10);
    const tokenTimestamp = parseInt(data.tokenTimestamp, 10);

    const currentTime = Date.now();
    const tokenAgeInSeconds = (currentTime - tokenTimestamp) / 1000;

    return tokenAgeInSeconds < expiresIn;
  } catch (error) {
    return false;
  }
};
