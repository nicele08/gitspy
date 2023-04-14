import { render } from '@testing-library/react';

import ComingSoonCard from '@/components/shared/others/ComingSoonCard';

describe('Test <ComingSoonCard />', () => {
  it('render ComingSoonCard without crashing', async () => {
    const { container } = render(<ComingSoonCard />);
    expect(container).toMatchSnapshot();
  });
});
