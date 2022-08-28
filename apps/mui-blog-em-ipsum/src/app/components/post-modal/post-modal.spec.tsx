import { render } from '@testing-library/react';

import PostModal from './post-modal';

describe('PostModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostModal />);
    expect(baseElement).toBeTruthy();
  });
});
