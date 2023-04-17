import { render } from '@testing-library/react';

import ComingSoonCard from '@/components/shared/others/ComingSoonCard';

describe('Test <ComingSoonCard />', () => {
  it('render ComingSoonCard without crashing', async () => {
    const { container, findAllByText } = render(<ComingSoonCard />);
    // expect(container).toMatchSnapshot();
    const elements = await findAllByText(/Coming Soon/i);
    expect(elements.length).not.toBe(0);
  });
});
