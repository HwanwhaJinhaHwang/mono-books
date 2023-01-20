import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

/* eslint-disable-next-line */
export interface BooksProps {}
export interface Book {
  id: string;
  title: string;
  authorId: string;
  categorieId: string;
}

interface Category {
  id: string;
  name: string;
}
// GraphQL API
const GET_CATEGORIES = gql`
  query categories {
    categories {
      id
      name
    }
  }
`;

export function Books(props: BooksProps) {
  const [booksState, setBooksState] = useState<Book[] | undefined>();
  const fetchRESTBooks = async () => {
    const res = await axios.get('http://localhost:3333/api/books');
    setBooksState(res.data);
  };

  const [runQuery, { loading, data }] = useLazyQuery<{
    categories: Category[];
  }>(GET_CATEGORIES);

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-row gap-x-2 pb-8">
          <button
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:text-white"
            onClick={fetchRESTBooks}
          >
            REST books
          </button>
          <button
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:text-white"
            onClick={() => runQuery()}
          >
            GQL categories
          </button>
        </div>
        {data?.categories.map((category) => (
          <article key={category.id}>
            <h2>{category.name}</h2>
            <p>{category.id}</p>
          </article>
        ))}

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {booksState?.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={'https://via.placeholder.com/150'}
                  // alt={book.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{book.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {book.authorId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
