import { render } from '@testing-library/react';

import ProduceDept from './produce-dept';

describe('ProduceDept', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProduceDept />);
    expect(baseElement).toBeTruthy();
  });
});
