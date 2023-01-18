import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BooksProps {}

const StyledBooks = styled.div`
  color: pink;
`;

export function Books(props: BooksProps) {
  return (
    <StyledBooks>
      <h1>Welcome to Books!</h1>
    </StyledBooks>
  );
}

export default Books;
