import { render } from '@testing-library/react';

import InfiniteSpecies from './infinite-species';

describe('InfiniteSpecies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfiniteSpecies />);
    expect(baseElement).toBeTruthy();
  });
});
