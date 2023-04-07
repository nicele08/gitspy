import { render } from '@testing-library/react';

import Organization from './Organization';

test('renders <Organization /> correctly', () => {
  const { getByText } = render(<Organization />);
  const text = getByText(/Organization/i);
  expect(text).toBeInTheDocument();
});
