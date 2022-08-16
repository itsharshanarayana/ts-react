import { render } from '@testing-library/react';

import GuestList from './guest-list';

describe('GuestList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GuestList />);
    expect(baseElement).toBeTruthy();
  });
});
