import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({resetResults}) => {
  return (
    <header className='header'>
      <Link to='/' onClick={resetResults}>
        <img className='logo-image' src='/logo.png' alt='black and brown dachschund'  />
      </Link>
      <div className='header-text'>
        <h1>Pet Furriendly</h1>
        <h2 className='slogan'>If you're there, they're there.</h2>
      </div>
    </header>
  );
};

export default Header;