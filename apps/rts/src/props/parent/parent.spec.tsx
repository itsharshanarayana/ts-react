import { render } from '@testing-library/react';

import Parent from './parent';

describe('Parent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Parent />);
    expect(baseElement).toBeTruthy();
  });
});
