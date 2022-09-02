import { render } from '@testing-library/react';

import MuiAccordion from './mui-accordion';

describe('MuiAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
