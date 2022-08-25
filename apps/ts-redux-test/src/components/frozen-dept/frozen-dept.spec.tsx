import { render } from '@testing-library/react';

import FrozenDept from './frozen-dept';

describe('FrozenDept', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrozenDept />);
    expect(baseElement).toBeTruthy();
  });
});
