import React from "react";
import "./App.css";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Services from "./components/Services";
import icon from './res/icon.png'

function App() {
  return (
    <>
      <div className="home-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <span className="logo">
              <img src={icon} alt="Dev Logo" />
            </span>
          </div>
          <div className="navbar-right">
            <a className="HS" href="#home">Home</a>
            <a className="HS" href="#projects">Projects</a>
            <a className="HS" href="#services">Services</a>
            <a className="contact-button" href="#contact">Contact Us</a>
          </div>
        </nav>
      </div>

      {/* Sections */}
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contacts />
      </div>

      {/* Footer */}
      <footer className="con-footer">
        <span className="logo">
          <img src={icon} alt="Dev Logo" />
        </span>
        <nav className="con-footer-nav">
          <a href="#home" className="con-footer-link">Home</a>
          <a href="#projects" className="con-footer-link">Projects</a>
          <a href="#services" className="con-footer-link">Services</a>
        </nav>
      </footer>
    </>
  );
}

export default App;
