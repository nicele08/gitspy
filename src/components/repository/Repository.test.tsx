import { render } from '@testing-library/react';

import Repository from './Repository';

test('renders <Repository /> correctly', () => {
  const { getByText } = render(<Repository />);
  const text = getByText(/Repository/i);
  expect(text).toBeInTheDocument();
});
