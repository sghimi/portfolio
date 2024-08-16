import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (hash) => {
    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ghimire</h1>

        <ul className="footer__list">
          <li>
            <Link
              to="/"
              onClick={() => handleNavClick("#about")}
              className="footer__link"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => handleNavClick("#portfolio")}
              className="footer__link"
            >
              Projects
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">@sghimi5</span>
      </div>
    </footer>
  );
};

export default Footer;
