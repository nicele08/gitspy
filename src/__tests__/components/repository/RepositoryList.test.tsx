import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RepositoryList from '@/components/repository/RepositoryList';
import { RepoCardProps } from '@/types/github/repo';

const data: RepoCardProps[] = [
  {
    id: 12345678,
    name: 'nicele08',
    description: 'Nicele08',
    html_url: 'https://avatars.githubusercontent.com/u/12345678',
    owner: {
      avatar_url:
        'https://avatars.githubusercontent.com/u/12345678?v=4',
      html_url: 'https://avatars.githubusercontent.com/u/12345678',
      login: 'nicele08',
    },
  },
];

describe('Test <RepositoryList />', () => {
  it('render RepositoryList without crashing', async () => {
    const { container } = render(
      <Router>
        <RepositoryList data={data} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
