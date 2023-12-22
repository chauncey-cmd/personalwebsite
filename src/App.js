// App.js

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Contact from './Contact';

function Header() {
  return (
    <header>
      <h1>Vinnie Angellotti</h1>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hello! I am Vinnie, and I am a Program Manager. This is my personal website where I share information about myself, my interests, and my experiences.
      </p>
      <p>
        I am from Wisconsin and I work at Microsoft.
      </p>
    </section>
  );
}

function App() {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <Router>
      <div>
        <Header />

        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <hr />

        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
          <div className="card-inner">
            <div className="card-front">
              <h2>Vinnie</h2>
            </div>
            <div className="card-back">
              <h2>Back</h2>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
