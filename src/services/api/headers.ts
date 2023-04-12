/* eslint-disable prettier/prettier */
import Secure from '@/utils/storage/secureLs';

const APIHeaders = {
  github: {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${
      Secure.getGithubAccessData()?.accessToken
    }`,
  },
};

export default APIHeaders;
