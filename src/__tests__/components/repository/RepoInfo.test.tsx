import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RepoInfo from '@/components/repository/partials/RepoInfo';
import repoData from '@/__tests__/data/repoData';

describe('Test <RepoInfo />', () => {
  it('render RepoInfo without crashing', async () => {
    const { container, findAllByText } = render(
      <Router>
        <RepoInfo
          repo={repoData.repo}
          contributors={repoData.contributors}
        />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const elements = await findAllByText(/gitspy/i);
    expect(elements.length).not.toBe(0);
  });
});
