import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ data }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className='link' to='/'><span className="navbar-brand">JAMIROQUAI STORE</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {data.map((category) => {
                                        return (
                                            <li key={category}><Link className='link' to={`/category/${category}`}><span className="dropdown-item">{category}</span></Link></li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"><CartWidget /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
