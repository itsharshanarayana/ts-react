import { render } from '@testing-library/react';

import ImageCard from './image-card';

describe('ImageCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageCard />);
    expect(baseElement).toBeTruthy();
  });
});
