import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li>
                <a href="sass.html">Home</a>
              </li>
              <li>
                <a href="badges.html">About</a>
              </li>
              <li>
                <a href="badges.html">Team</a>
              </li>
              <li>
                <a href="collapsible.html">Blog</a>
              </li>
              <li>
                <a href="collapsible.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
