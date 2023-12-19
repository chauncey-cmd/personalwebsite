import './App.css';
import React, { useState } from 'react';
import ThreeScene from './ThreeScene';

function Header() {
  return (
    <header>
      <h1>About Me</h1>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hello! I am Vinnies, and I am a Program Manager. This is my personal website where I share information about myself, my interests, and my experiences.
      </p>
      <p>
        I am from Wisconsin and I work at Microsoft.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch with me, you can reach me at vinnie@gmail.com. Feel free to drop me a message, and I'll get back to you as soon as possible.
      </p>
      <p>
        You can also find me on social media: vinnie.angel.
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
    <><div>
      <Header />
      <main>
        <About />
        <Contact />
        <ThreeScene />
      </main>
    </div>

    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-inner">
          <div className="card-front">
            <h2>Vinnie</h2>
          </div>
          <div className="card-back">
            <h2>Back</h2>
          </div>
        </div>
      </div></>
  );
}

export default App;
