import { render, screen, userEvent } from '../utils/test-utils';

import Books from './books';

describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Books />);
    expect(baseElement).toBeTruthy();
  });
});
