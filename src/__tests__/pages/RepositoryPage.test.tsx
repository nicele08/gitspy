import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RepositoryPage from '@/pages/RepositoryPage';

describe('Test <RepositoryPage />', () => {
  it('renders RepositoryPage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <RepositoryPage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    // const text = await findByText(/Contributions/i);
    // expect(text).toBeInTheDocument();
  });
});
