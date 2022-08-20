import { render } from '@testing-library/react';

import VideoList from './video-list';

describe('VideoList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoList />);
    expect(baseElement).toBeTruthy();
  });
});
