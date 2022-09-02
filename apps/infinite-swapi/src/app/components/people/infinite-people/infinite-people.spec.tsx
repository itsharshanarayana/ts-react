import { render } from '@testing-library/react';

import InfinitePeople from './infinite-people';

describe('InfinitePeople', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfinitePeople />);
    expect(baseElement).toBeTruthy();
  });
});
