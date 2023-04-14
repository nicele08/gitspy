import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import OrganizationsPage from '@/pages/OrganizationsPage';

describe('Test <OrganizationsPage />', () => {
  it('renders OrganizationsPage without crashing', async () => {
    const { container } = render(
      <Router>
        <OrganizationsPage />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
