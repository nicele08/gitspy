import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Pagination from '@/components/shared/Pagination';

test('renders <Pagination /> correctly', async () => {
  const { findByText } = render(
    <Router>
      <Pagination currentPage={1} totalPages={20} />
    </Router>,
  );
  const one = await findByText(/1/i);
  expect(one).toBeInTheDocument();

  const twenty = await findByText(/20/i);
  expect(twenty).toBeInTheDocument();
});
