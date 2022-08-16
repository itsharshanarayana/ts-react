import { render } from '@testing-library/react';

import CommentDetail from './comment-detail';

describe('CommentDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommentDetail />);
    expect(baseElement).toBeTruthy();
  });
});
