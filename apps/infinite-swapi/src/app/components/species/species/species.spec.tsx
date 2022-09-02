import { render } from '@testing-library/react';

import Species from './species';

describe('Species', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Species />);
    expect(baseElement).toBeTruthy();
  });
});
