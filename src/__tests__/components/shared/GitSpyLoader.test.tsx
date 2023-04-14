import { render } from '@testing-library/react';

import GitSpyLoader from '@/components/shared/skeleton/GitSpyLoader';

describe('Test <GitSpyLoader />', () => {
  it('render GitSpyLoader without crashing', async () => {
    const { container } = render(<GitSpyLoader />);
    expect(container).toMatchSnapshot();
  });
});
