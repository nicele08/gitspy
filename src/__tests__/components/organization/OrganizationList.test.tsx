import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import OrganizationList from '@/components/organization/OrganizationList';
import { OrganizationCardProps } from '@/types/github/repo';

const data: OrganizationCardProps[] = [
  {
    login: 'nicele08',
    avatar_url:
      'https://avatars.githubusercontent.com/u/12345678?v=4',
    description: 'Nicele08',
    id: 12345678,
    html_url: 'https://avatars.githubusercontent.com/u/12345678',
    repos_url: 'https://api.github.com/users/nicele08/repos',
    url: 'https://api.github.com/users/nicele08',
  },
];

describe('Test <OrganizationList />', () => {
  it('render OrganizationList component without crashing', async () => {
    const { container } = render(
      <Router>
        <OrganizationList data={data} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
