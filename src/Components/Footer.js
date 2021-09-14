import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Footer() {
  return (
    <Router>
      <div classNameName="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/plans" className="nav-link px-2 text-muted">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-muted">
                About
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">
            © {new Date().getFullYear()} Orion Gym
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default Footer;
