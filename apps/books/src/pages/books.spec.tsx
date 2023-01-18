import { render, screen, userEvent } from '../utils/test-utils';

import Books from './books';
import { books } from '../mocks/handlers';

describe('Books', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Books />);
    expect(baseElement).toBeTruthy();

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Click REST books',
      })
    );

    books.forEach((book) => {
      expect(
        screen.getByRole('heading', { name: book.title, level: 2 })
      ).toBeDefined();
      expect(screen.getByText(book.authorId)).toBeDefined();
    });
  });
});
