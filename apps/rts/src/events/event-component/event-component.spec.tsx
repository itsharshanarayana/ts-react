import { render } from '@testing-library/react';

import EventComponent from './event-component';

describe('EventComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventComponent />);
    expect(baseElement).toBeTruthy();
  });
});
