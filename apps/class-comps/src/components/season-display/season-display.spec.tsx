import { render } from '@testing-library/react';

import SeasonDisplay from './season-display';

describe('SeasonDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeasonDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
