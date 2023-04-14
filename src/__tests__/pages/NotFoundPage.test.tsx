import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from '@/pages/NotFoundPage';

describe('Test <NotFoundPage />', () => {
  it('renders NotFoundPage without crashing', async () => {
    const { container } = render(
      <Router>
        <NotFoundPage />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
