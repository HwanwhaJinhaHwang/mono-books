import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Books from '../pages/books';

function App() {
  return (
    <main className="App">
      <h1>MSW Testing Library Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </main>
  );
}

export default App;
