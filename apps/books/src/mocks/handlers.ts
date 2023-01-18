// src/mocks/handlers.js
import { rest, graphql } from 'msw';

// Mock Data
export const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  {
    userId: 2,
    id: 5,
    title: 'second post title',
    body: 'second post body',
  },
  {
    userId: 3,
    id: 6,
    title: 'third post title',
    body: 'third post body',
  },
];

export const books = [
  {
    id: '0',
    title: 'Illusion Perdues',
    authorId: '1',
    categorieId: '1',
  },
  {
    id: '1',
    title: 'Dune',
    authorId: '0',
    categorieId: '0',
  },
];

const API_REST_HOST = 'http://localhost:3333/api';
const API_GQL_HOST = 'http://localhost:4000/graphql';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),

  graphql
    .link('https://jsonplaceholder.ir/graphql')
    .query('posts', (req, res, ctx) => {
      return res(
        ctx.data({
          posts,
        })
      );
    }),

  rest.get(`${API_REST_HOST}/books`, (req, res, context) => {
    return res(context.status(200), context.json(books));
  }),
];
