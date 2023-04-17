import { render } from '@testing-library/react';

import DataLayout from '@/components/layouts/DataLayout';

describe('Test <DataLayoutComponent />', () => {
  it('show loader when loading data', async () => {
    const { container, findAllByText } = render(
      <DataLayout isLoading>Loading....</DataLayout>,
    );
    // expect(container).toMatchSnapshot();
    const elements = await findAllByText(/Loading.../i);
    expect(elements.length).not.toBe(0);
  });

  it('show error when error is occured', async () => {
    const { container, findAllByText } = render(
      <DataLayout isLoading={false} isError={new Error('Error!')}>
        Error!
      </DataLayout>,
    );
    // expect(container).toMatchSnapshot();
    const elements = await findAllByText(/Reload page/i);
    expect(elements.length).not.toBe(0);
  });

  it('should render data when there is no error', async () => {
    const { container, findAllByText } = render(
      <DataLayout isLoading={false}>Test App data</DataLayout>,
    );
    // expect(container).toMatchSnapshot();
    const elements = await findAllByText(/Test App data/i);
    expect(elements.length).not.toBe(0);
  });
});
