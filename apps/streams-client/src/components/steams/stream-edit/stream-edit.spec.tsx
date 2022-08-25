import { render } from '@testing-library/react';

import StreamEdit from './stream-edit';

describe('StreamEdit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StreamEdit />);
    expect(baseElement).toBeTruthy();
  });
});
