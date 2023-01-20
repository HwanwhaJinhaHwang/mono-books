import { ApolloProvider } from '@apollo/client';
import { books, categories } from '@mono-books/handlers';
import { render, screen, userEvent } from '../utils/test-utils';

import Books from './books';
import { client } from '../apollo-client';

describe('Books', () => {
  it('Should return books when clicking Click REST books button', async () => {
    const { baseElement } = render(
      <ApolloProvider client={client}>
        <Books />
      </ApolloProvider>
    );
    expect(baseElement).toBeTruthy();

    await userEvent.click(
      screen.getByRole('button', {
        name: 'REST books',
      })
    );

    books.forEach((book) => {
      expect(
        screen.getByRole('heading', { name: book.title, level: 3 })
      ).toBeDefined();
      expect(screen.getByText(book.authorId)).toBeDefined();
    });
  });
  it('Should return books when clicking Click GQL categories', async () => {
    const { baseElement } = render(
      <ApolloProvider client={client}>
        <Books />
      </ApolloProvider>
    );
    expect(baseElement).toBeTruthy();

    const gqlCategoriesButton = screen.getByRole('button', {
      name: 'GQL categories',
    });
    expect(gqlCategoriesButton).toBeDefined();

    await userEvent.click(gqlCategoriesButton);

    categories.forEach((category) => {
      expect(
        screen.getByRole('heading', { name: category.name, level: 2 })
      ).toBeDefined();
      expect(screen.getByText(category.id)).toBeDefined();
    });
  });
});
