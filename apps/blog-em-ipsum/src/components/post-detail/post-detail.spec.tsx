import { render } from '@testing-library/react';

import PostDetail from './post-detail';

describe('PostDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostDetail />);
    expect(baseElement).toBeTruthy();
  });
});
