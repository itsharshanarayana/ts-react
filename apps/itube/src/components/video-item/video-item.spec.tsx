import { render } from '@testing-library/react';

import VideoItem from './video-item';

describe('VideoItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoItem />);
    expect(baseElement).toBeTruthy();
  });
});
