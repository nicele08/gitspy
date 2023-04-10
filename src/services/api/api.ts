import axios from 'axios';

import Keys from '@/utils/appConstants/keys';
import Secure from '@/utils/storage/secureLs';

const API = {
  default: axios.create({
    baseURL: Keys.APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  github: axios.create({
    baseURL: Keys.GITHUB_API_URL,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${
        Secure.getGithubAccessData()?.accessToken
      }`,
    },
  }),
};

export default API;
