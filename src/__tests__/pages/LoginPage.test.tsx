import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage';

describe('Test <LoginPage />', () => {
  it('renders LoginPage without crashing', async () => {
    const { container } = render(
      <Router>
        <LoginPage />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
