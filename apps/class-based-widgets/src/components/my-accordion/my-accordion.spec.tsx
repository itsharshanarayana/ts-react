import { render } from '@testing-library/react';

import MyAccordion from './my-accordion';

describe('MyAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
