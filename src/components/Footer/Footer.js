import React from 'react';
import './Footer.css';
import logo from '../../assets/img/logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__espacio'></div>
        <h4 className='footer__logo'>
          <img src={logo} alt='logo' />
        </h4>
        <p className='footer__parrafo'>Copyright &copy; 2021 - Leandro Berne</p>
        <div className='footer__social'>
          <Link to={{ pathname: 'https://www.facebook.com/' }} target='_blank'>
            <FontAwesomeIcon icon={faFacebook} className='fab fa-facebook' />
          </Link>
          <Link to={{ pathname: 'https://www.instagram.com/' }} target='_blank'>
            <FontAwesomeIcon icon={faInstagram} className='fab fa-instagram' />
          </Link>
          <Link to={{ pathname: 'https://www.twitter.com' }} target='_blank'>
            <FontAwesomeIcon icon={faTwitter} className='fab fa-twitter' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
