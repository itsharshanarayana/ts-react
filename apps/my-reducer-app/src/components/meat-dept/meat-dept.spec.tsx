import { render } from '@testing-library/react';

import MeatDept from './meat-dept';

describe('MeatDept', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MeatDept />);
    expect(baseElement).toBeTruthy();
  });
});
