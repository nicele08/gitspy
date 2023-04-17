import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import OrganizationsPage from '@/pages/OrganizationsPage';

describe('Test <OrganizationsPage />', () => {
  it('renders OrganizationsPage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <OrganizationsPage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const text = await findByText(/Your Organizations/i);
    expect(text).toBeInTheDocument();
  });
});
