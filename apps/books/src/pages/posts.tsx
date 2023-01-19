import styled from '@emotion/styled';
import * as React from 'react';
import fetch from 'cross-fetch';
import { gql, useLazyQuery } from '@apollo/client';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* eslint-disable-next-line */
export interface PostsProps {}

const StyledPosts = styled.div`
  color: pink;
`;

export function Posts(props: PostsProps) {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => setPosts(posts as Post[]));

    setIsLoading(false);
  };

  // GraphQL API
  const GET_POSTS = gql`
    query posts {
      posts {
        userId
        id
        title
        body
      }
    }
  `;

  const [runQuery, { loading, data }] = useLazyQuery<{ posts: Post[] }>(
    GET_POSTS
  );
  return (
    <StyledPosts>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts.length > 0 &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      <button onClick={() => fetchPosts()}>Fetch Posts</button>

      {loading && <span aria-label="loading">Loading...</span>}
      {data?.posts?.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
      <button onClick={() => runQuery()}>Fetch Posts GraphQL</button>
    </StyledPosts>
  );
}

export default Posts;
