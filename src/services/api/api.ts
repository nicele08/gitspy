import axios from 'axios';

import Keys from '@/utils/appConstants/keys';

const API = {
  default: axios.create({
    baseURL: Keys.APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
};

export default API;
