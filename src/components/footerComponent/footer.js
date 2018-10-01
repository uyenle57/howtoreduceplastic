import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
