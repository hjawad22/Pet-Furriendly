import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>Pet Furriendly</h1>
      <h2>If you're there, they're there.</h2>
      <NavLink to='/'>Add logo here</NavLink>
    </header>
  );
};

export default Header;