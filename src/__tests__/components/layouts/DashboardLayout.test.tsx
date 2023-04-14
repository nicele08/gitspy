import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DashboardLayout from '@/components/layouts/DashboardLayout';

test('renders <DashboardLayout /> correctly', async () => {
  const { findAllByText } = render(
    <Router>
      <DashboardLayout>Hello world</DashboardLayout>
    </Router>,
  );
  const elements = await findAllByText(/Hello world/i);
  expect(elements.length).not.toBe(0);
});
