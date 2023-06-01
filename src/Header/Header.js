import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      {/* Link placeholder below for clickable logo */}
      <Link to='/' className='logo-link'>Add logo here</Link>
      <div>
        <h1>Pet Furriendly</h1>
        <h2 className='slogan'>If you're there, they're there.</h2>
      </div>
    </header>
  );
};

export default Header;