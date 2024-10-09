import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(Props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {Props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {Props.aboutText}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${Props.mode === 'light'? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={Props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
