import { render } from '@testing-library/react';

import MyDropdown from './my-dropdown';

describe('MyDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
