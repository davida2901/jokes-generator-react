import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import DadJokes from "./DadJokes";
import DadJokesWithAPi from "./DadJokesWithAPi";
import "./styles/jokes.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul>
            <li className="item">
              <Link className="item-text" to="/">Home</Link>
            </li>
            <li className="item">
              <Link className="item-text" to="/jokes">Jokes</Link>
            </li>
            <li className="item">
              <Link className="item-text" to="/jokes-with-api">Jokes From API</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Test</h1>} exact />
          <Route path="/jokes" element={<DadJokes />} exact />
          <Route path="/jokes-with-api" element={<DadJokesWithAPi />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
