import { render } from '@testing-library/react';

import StreamDelete from './stream-delete';

describe('StreamDelete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StreamDelete />);
    expect(baseElement).toBeTruthy();
  });
});
