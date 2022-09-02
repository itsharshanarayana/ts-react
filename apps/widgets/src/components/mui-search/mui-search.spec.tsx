import { render } from '@testing-library/react';

import MuiSearch from './mui-search';

describe('MuiSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiSearch />);
    expect(baseElement).toBeTruthy();
  });
});
