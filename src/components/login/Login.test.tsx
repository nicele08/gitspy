import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Login from './Login';

test('renders <Login /> correctly', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );
  const text = getByText(/Sign in to GitSpy/i);
  expect(text).toBeInTheDocument();
});
