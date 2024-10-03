import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>IIIT Kota-CodeBase</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h2>Welcome to IIIT Kota CodeBase</h2>
        <p>Where innovation meets excellence in coding and technology</p>
        <a href="#about" className="hero-btn">Learn More</a>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About IIIT Kota</h2>
      <p>
      IIIT Kota Codebase is an innovative initiative led by the Indian Institute of Information Technology, Kota, aimed at fostering a collaborative community of developers, students, and tech enthusiasts. Our codebase is an open platform where students contribute to real-world projects, sharpen their coding skills, and collaborate on solving industry-relevant problems. With a focus on cutting-edge technologies, open-source development, and mentorship, we empower students to build solutions that impact society while learning from industry professionals and academic experts.
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 IIIT Kota. All Rights Reserved.</p>
    </footer>
  );
};

export default App;
