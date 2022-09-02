import { render } from '@testing-library/react';

import MuiDropdown from './mui-dropdown';

describe('MuiDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
