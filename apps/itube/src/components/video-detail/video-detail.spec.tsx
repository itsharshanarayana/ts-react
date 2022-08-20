import { render } from '@testing-library/react';

import VideoDetail from './video-detail';

describe('VideoDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoDetail />);
    expect(baseElement).toBeTruthy();
  });
});
