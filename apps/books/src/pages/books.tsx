import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import * as React from 'react';

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

export function Books(props: BooksProps) {
  const [booksState, setBooksState] = useState<Book[] | undefined>();
  const fetchRESTBooks = async () => {
    const res = await axios.get('http://localhost:3333/api/books');
    setBooksState(res.data);
  };
  const handleRestClick = () => {
    fetchRESTBooks();
  };
  return (
    <StyledBooks>
      <h1>Welcome to Books!</h1>
      <button onClick={handleRestClick}>Click REST books</button>
      {booksState?.map((book) => (
        <article key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.authorId}</p>
        </article>
      ))}
    </StyledBooks>
  );
}

export default Books;
