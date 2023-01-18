import { render } from '@testing-library/react';

import Posts from './posts';
import { client } from '../apollo-client';
import { ApolloProvider } from '@apollo/client';
import { screen, userEvent } from '../utils/test-utils';
import { posts } from '../mocks/handlers';

describe('Posts', () => {
  it('Should return posts when clicking fetch button', async () => {
    const { baseElement } = render(
      <ApolloProvider client={client}>
        <Posts />
      </ApolloProvider>
    );
    expect(baseElement).toBeTruthy();

    await userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));

    posts.forEach((post) => {
      expect(
        screen.getByRole('heading', { name: post.title, level: 2 })
      ).toBeDefined();
      expect(screen.getByText(post.body)).toBeDefined();
    });
  });

  it('Should return posts when clicking fetch with graphql button', async () => {
    render(
      <ApolloProvider client={client}>
        <Posts />
      </ApolloProvider>
    );

    await userEvent.click(
      screen.getByRole('button', { name: 'Fetch Posts GraphQL' })
    );

    posts.forEach((post) => {
      expect(
        screen.getByRole('heading', { name: post.title, level: 2 })
      ).toBeDefined();
      expect(screen.getByText(post.body)).toBeDefined();
    });
  });
});
