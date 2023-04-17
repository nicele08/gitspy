import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RepositoriesPage from '@/pages/RepositoriesPage';

describe('Test <RepositoriesPage />', () => {
  it('renders RepositoriesPage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <RepositoriesPage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const text = await findByText(/Your Repositories/i);
    expect(text).toBeInTheDocument();
  });
});
