import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
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

const StyledBooks = styled.div`
  color: pink;
`;

interface Category {
  id: string;
  name: string;
}

export function Books(props: BooksProps) {
  const [booksState, setBooksState] = useState<Book[] | undefined>();
  const fetchRESTBooks = async () => {
    const res = await axios.get('http://localhost:3333/api/books');
    setBooksState(res.data);
  };
  const handleRestClick = () => {
    fetchRESTBooks();
  };

  // GraphQL API
  const GET_CATEGORIES = gql`
    query categories {
      categories {
        id
        name
      }
    }
  `;

  const [runQuery, { loading, data }] = useLazyQuery<{
    categories: Category[];
  }>(GET_CATEGORIES);
  return (
    <StyledBooks>
      <h1>Welcome to Books!</h1>
      <button onClick={handleRestClick}>Click REST books</button>
      <button onClick={() => runQuery()}>Click GQL categories</button>
      {booksState?.map((book) => (
        <article key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.authorId}</p>
        </article>
      ))}
      {data?.categories.map((category) => (
        <article key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.id}</p>
        </article>
      ))}
    </StyledBooks>
  );
}

export default Books;
