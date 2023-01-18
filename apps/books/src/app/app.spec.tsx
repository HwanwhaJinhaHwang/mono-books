import { BrowserRouter } from 'react-router-dom';
import { render, userEvent, screen } from '../utils/test-utils';
import { client } from '../apollo-client';

import App from './app';
import { posts } from '../mocks/handlers';
import { ApolloProvider } from '@apollo/client';

describe('App gql test', function () {
  it('Should return posts when clicking fetch button', async () => {
    render(
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: 'MSW Testing Library Example',
        level: 1,
      })
    ).toBeDefined();

    // link 클릭
    await userEvent.click(screen.getByRole('link', { name: 'Posts' }));

    await userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));

    // await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'));

    posts.forEach((post) => {
      expect(
        screen.getByRole('heading', { name: post.title, level: 2 })
      ).toBeDefined();
      expect(screen.getByText(post.body)).toBeDefined();
    });
  });

  it('Should return posts when clicking fetch with graphql button', async () => {
    render(
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: 'MSW Testing Library Example',
        level: 1,
      })
    ).toBeDefined();

    // link 클릭
    await userEvent.click(screen.getByRole('link', { name: 'Posts' }));

    await userEvent.click(
      screen.getByRole('button', { name: 'Fetch Posts GraphQL' })
    );

    // await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'));

    posts.forEach((post) => {
      expect(
        screen.getByRole('heading', { name: post.title, level: 2 })
      ).toBeDefined();
      expect(screen.getByText(post.body)).toBeDefined();
    });
  });
});
