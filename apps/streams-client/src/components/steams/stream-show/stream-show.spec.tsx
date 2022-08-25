import { render } from '@testing-library/react';

import StreamShow from './stream-show';

describe('StreamShow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StreamShow />);
    expect(baseElement).toBeTruthy();
  });
});
