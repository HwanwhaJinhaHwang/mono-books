import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Books from '../pages/books';
import Layout from '../templates/layout';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>home</div>} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
