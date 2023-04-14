import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RepositoryPage from '@/pages/RepositoryPage';

describe('Test <RepositoryPage />', () => {
  it('renders RepositoryPage without crashing', async () => {
    const { container } = render(
      <Router>
        <RepositoryPage />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
