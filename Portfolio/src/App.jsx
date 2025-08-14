
import React, { useState } from 'react';
import './App.css';

const pages = ["Home", "About", "Projects", "Contact"];

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="portfolio-root">
      <nav className="portfolio-nav">
        <div className="portfolio-logo">SidiqiJ</div>
        <ul>
          {pages.map((p) => (
            <li key={p}>
              <button className={page === p ? "active" : ""} onClick={() => setPage(p)}>{p}</button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="portfolio-main">
        {page === "Home" && (
          <section className="home-section">
            <h1>Technical Product Manager & AI Expert</h1>
            <p className="subtitle">Driving innovation at the intersection of product, project management, and technology.</p>
            <div className="skills">
              <span>AI</span>
              <span>Product Management</span>
              <span>Project Management</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>PowerBI</span>
              <span>and more...</span>
            </div>
            <p className="ai-callout">Expert in leveraging AI and data to deliver impactful products and solutions.</p>
          </section>
        )}
        {page === "About" && (
          <section className="about-section">
            <h2>About Me</h2>
            <p>
              I am a Technical Product Manager with a passion for building products that solve real problems. My experience spans product and project management, technical leadership, and hands-on development.
            </p>
          </section>
        )}
        {page === "Projects" && (
          <section className="projects-section">
            <h2>Projects</h2>
            <p>Showcase coming soon! This section will feature my work in AI, web development, and data analytics.</p>
          </section>
        )}
        {page === "Contact" && (
          <section className="contact-section">
            <h2>Contact</h2>
            <p>Let's connect! Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
