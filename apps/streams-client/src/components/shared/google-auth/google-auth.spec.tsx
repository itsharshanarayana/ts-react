import { render } from '@testing-library/react';

import GoogleAuth from './google-auth';

describe('GoogleAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleAuth />);
    expect(baseElement).toBeTruthy();
  });
});
