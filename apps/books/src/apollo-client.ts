import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';
import { API_GQL_HOST } from '@mono-books/constants';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: API_GQL_HOST,

  // Use explicit `window.fetch` so that outgoing requests
  // are captured and deferred until the Service Worker is ready.
  fetch: (...args) => fetch(...args),
});

export const client = new ApolloClient({
  cache,
  link,
});
