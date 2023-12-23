// App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Contact from './Contact';
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <header>
      <h1>Vinnie Angellotti</h1>
      <SocialLinks />
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div class="cool-intro">
  <p>
    Hey there! I'm Vinnie Angellotti, a tech enthusiast and accomplished Program Manager who's passionate about shaping the future through innovation. Welcome to my digital hub – the epicenter of my professional journey and personal passions.
  </p>
  <p>
    In my role as a Program Manager, I'm on a relentless pursuit of merging technology with business acumen, steering projects towards success and contributing to the growth of organizations. With a proven track record of meticulous planning and execution, I thrive on driving impactful initiatives that truly make a difference.
  </p>
  <p>
    Originating from the scenic landscapes of Wisconsin, my career path led me to the vibrant tech scene of Washington. Currently based in the heart of innovation, I'm continually exploring and contributing to the exciting world of technology.
  </p>
  <p>
    Beyond the boardroom, I'm a dedicated sports enthusiast. Whether it's a friendly match or a competitive game, I find joy and balance on the playing field, believing in the power of sports to inspire teamwork, discipline, and personal growth.
  </p>
  <p>
    Navigating the ever-evolving tech landscape, I've had the privilege of contributing to cutting-edge projects at Microsoft, a global leader in the industry. This journey has been both rewarding and stimulating, fostering collaboration with brilliant minds and shaping the future of technology.
  </p>
  <p>
    This website is more than a portfolio – it's a canvas that reflects my journey, offering glimpses into my professional achievements, personal interests, and unique experiences. Dive in, connect, and feel free to reach out with any questions or if there's something specific you'd like to know.
  </p>
  <p>
    Thanks for dropping by, and let's embark on this exciting journey together!
  </p>
</div>

    </section>
  );
}

function App() {

  return (
    <Router>
      <div  className="center-container">
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

      </div>
    </Router>
  );
}

export default App;
