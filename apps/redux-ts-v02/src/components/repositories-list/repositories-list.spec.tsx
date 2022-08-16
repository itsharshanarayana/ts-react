import { render } from '@testing-library/react';

import RepositoriesList from './repositories-list';

describe('RepositoriesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RepositoriesList />);
    expect(baseElement).toBeTruthy();
  });
});
