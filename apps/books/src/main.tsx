import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import App from './app/app';
import './styles.css';

const prepare = async () => {
  if (import.meta.env.MODE === 'development') {
    import('./mocks/browser').then(({ worker }) => {
      worker.start();
    });
  }
};

prepare().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </StrictMode>
  );
});
