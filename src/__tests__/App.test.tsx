import { render } from '@testing-library/react';

import App from '@/App';

test('renders App correctly', async () => {
  const { findAllByText } = render(<App />);
  const elements = await findAllByText(/GitSpy/i);
  expect(elements.length).not.toBe(0);
});
