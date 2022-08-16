import { render } from '@testing-library/react';

import ApprovalCard from './approval-card';

describe('ApprovalCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApprovalCard />);
    expect(baseElement).toBeTruthy();
  });
});
