import { render } from '@testing-library/react';

import MySearch from './my-search';

describe('MySearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MySearch />);
    expect(baseElement).toBeTruthy();
  });
});
