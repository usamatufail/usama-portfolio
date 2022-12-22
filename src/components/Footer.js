import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';
// import English from '../images/kingdom_united_icon.png';
// import Portuguese from '../images/brazil_icon.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>find me at:</p>
        <a href="https://www.linkedin.com/in/thesamhere/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer" />
        </a>
        <a href="https://github.com/usamatufail"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer" />
        </a>
      </div>

      <p className="text-footer">Hosted with ❤ by Sam T.</p>
    </footer>
  );
}

export default Footer;