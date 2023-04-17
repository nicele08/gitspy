import { render } from '@testing-library/react';

import GitSpyLoader from '@/components/shared/skeleton/GitSpyLoader';

describe('Test <GitSpyLoader />', () => {
  it('render GitSpyLoader without crashing', async () => {
    const { container, findAllByText } = render(<GitSpyLoader />);
    // expect(container).toMatchSnapshot();
    const elements = await findAllByText(/Loading.../i);
    expect(elements.length).not.toBe(0);
  });
});
