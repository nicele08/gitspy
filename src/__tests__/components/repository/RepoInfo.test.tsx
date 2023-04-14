import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RepoInfo from '@/components/repository/partials/RepoInfo';
import repoData from '@/__tests__/data/repoData';

describe('Test <RepoInfo />', () => {
  it('render RepoInfo without crashing', async () => {
    const { container } = render(
      <Router>
        <RepoInfo
          repo={repoData.repo}
          contributors={repoData.contributors}
        />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
