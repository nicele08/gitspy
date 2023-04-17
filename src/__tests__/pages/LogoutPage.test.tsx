import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LogoutPage from '@/pages/LogoutPage';

describe('Test <LogoutPage />', () => {
  it('renders LogoutPage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <LogoutPage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const text = await findByText(
      /Are you sure you want to log out?/i,
    );
    expect(text).toBeInTheDocument();
  });
});
