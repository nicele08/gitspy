import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage';

describe('Test <LoginPage />', () => {
  it('renders LoginPage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <LoginPage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const text = await findByText(/Sign in to GitSpy/i);
    expect(text).toBeInTheDocument();
  });
});
