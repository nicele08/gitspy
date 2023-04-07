import { render } from '@testing-library/react';

import Login from './Login';

test('renders <Login /> correctly', () => {
  const { getByText } = render(<Login />);
  const text = getByText(/Login/i);
  expect(text).toBeInTheDocument();
});
