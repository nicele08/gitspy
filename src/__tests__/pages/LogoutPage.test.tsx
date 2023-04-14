import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LogoutPage from '@/pages/LogoutPage';

describe('Test <LogoutPage />', () => {
  it('renders LogoutPage without crashing', async () => {
    const { container } = render(
      <Router>
        <LogoutPage />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
