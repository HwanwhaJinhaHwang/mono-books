import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Books from '../pages/books';
import Layout from '../templates/layout';
import { Button } from '@mono-books/ui';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  return (
    <main>
      <Helmet>
        <html data-theme={theme} />
        <title>{theme}</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div>
                <Button
                  onClick={() => {
                    const toggledTheme = theme === 'dark' ? 'light' : 'dark';
                    setTheme(toggledTheme);
                  }}
                >
                  toggle {theme}
                </Button>
              </div>
            }
          />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
