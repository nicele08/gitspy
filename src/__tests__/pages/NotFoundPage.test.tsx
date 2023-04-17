import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from '@/pages/NotFoundPage';

describe('Test <NotFoundPage />', () => {
  it('renders NotFoundPage without crashing', async () => {
    const { findByText } = render(
      <Router>
        <NotFoundPage />
      </Router>,
    );
    // expect(container).toMatchSnapshot();
    const notFound = await findByText(/404/i);
    expect(notFound).toBeInTheDocument();
  });
});
