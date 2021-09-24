import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

const NavBar = ({ data }) => {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light py-4'>
      <div className='container'>
        <Link className='link' to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <div className='mx-auto'></div>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='link' to='/'>
                <span className='nav-link text-black'></span>
              </Link>
            </li>
            {data.map((category) => {
              return (
                <li className='nav-item' key={category}>
                  <Link className='link' to={`/category/${category}`}>
                    <span className='nav-link text-black'>{category}</span>
                  </Link>
                </li>
              );
            })}
            <li className='nav-item'>
              <span className='nav-link'>
                <CartWidget />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
