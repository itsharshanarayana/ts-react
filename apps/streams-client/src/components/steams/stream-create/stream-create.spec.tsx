import { render } from '@testing-library/react';

import StreamCreate from './stream-create';

describe('StreamCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StreamCreate />);
    expect(baseElement).toBeTruthy();
  });
});
