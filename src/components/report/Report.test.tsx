import { render } from '@testing-library/react';

import Report from './Report';

test('renders <Report /> correctly', () => {
  const { getByText } = render(<Report />);
  const text = getByText(/Report/i);
  expect(text).toBeInTheDocument();
});
