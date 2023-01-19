import { BrowserRouter } from 'react-router-dom';
import { render } from '../utils/test-utils';
import { client } from '../apollo-client';

import App from './app';
import { ApolloProvider } from '@apollo/client';
import { expect } from 'vitest';

describe('App test', function () {
  it('Should render App', async () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    );

    expect(baseElement).toBeDefined();
  });
});
