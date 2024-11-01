import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-content">
          <h2>
            <a href="index.html" style={{ color: "inherit" }}>
              Sujal Bhatnagar
            </a>{" "}
            &copy; 2024
          </h2>
          <div className="social-links">
            <h3>Follow Me</h3>
            <a
              href="https://github.com/sujalB03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github github-icon"></i>
            </a>
            <a
              href="http://linkedin.com/in/sujal-bhatnagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
