import React from "react";
import SignUp from "./SignUp";
import Main from "./Main";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <Link
            to="/"
            class="d-flex align-items-center text-dark text-decoration-none"
          >
            <span class="fs-4">Orion Home</span>
          </Link>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/plans" className="nav-link px-2 link-dark">
                Pricing
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                About
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <Link to="register">
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </Link>
          </div>
        </header>
      </div>
      <Switch>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/plans">
          <Main />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
