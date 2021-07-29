import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    hamburgerOpen: false
  };

  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            Coinfam
          </a>
          <ul className={`nav-menu ${this.state.hamburgerOpen && "active"}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feed" className="nav-link">
                Feed
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bundles" className="nav-link">
                Bundles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
          <div
            className={`hamburger ${this.state.hamburgerOpen && "active"}`}
            onClick={() =>
              this.setState({ hamburgerOpen: !this.state.hamburgerOpen })
            }
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
