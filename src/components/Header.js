import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Hackathon Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/all-hackathons">Hackathons</Link>
          <Link to="/all-workshops">Workshops</Link>
          <Link to="/all-events">Events</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
