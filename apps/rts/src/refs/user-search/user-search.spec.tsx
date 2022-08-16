import { render } from '@testing-library/react';

import UserSearch from './user-search';

describe('UserSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSearch />);
    expect(baseElement).toBeTruthy();
  });
});
