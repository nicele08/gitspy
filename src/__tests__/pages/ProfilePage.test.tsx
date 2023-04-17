import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ProfilePage from '@/pages/ProfilePage';

describe('Test <ProfilePage />', () => {
  it('renders ProfilePage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <ProfilePage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const text = await findByText(/Your Repositories/i);
    expect(text).toBeInTheDocument();
  });
});
