import axios from 'axios';

import APIHeaders from './headers';

import Keys from '@/utils/appConstants/keys';

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
    headers: APIHeaders.github,
  }),
};

export default API;
