import { rest, graphql } from 'msw';
import { API_GQL_HOST, API_REST_HOST } from '@mono-books/constants';

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

export const categories = [
  {
    id: '0',
    name: 'Fiction',
  },
  {
    id: '1',
    name: 'French',
  },
];

export const handlers = [
  rest.get(`${API_REST_HOST}/books`, (req, res, context) => {
    return res(context.status(200), context.json(books));
  }),

  graphql.link(API_GQL_HOST).query('categories', (req, res, context) => {
    return res(
      context.data({
        categories,
      })
    );
  }),
];
