import { render } from '@testing-library/react';

import StreamList from './stream-list';

describe('StreamList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StreamList />);
    expect(baseElement).toBeTruthy();
  });
});
