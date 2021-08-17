import React from 'react';
import './Item.css';

const Item = ({data}) => {
    return (
        <div className="card">
            <img src={data.image} className="card-img-top" alt="Imagen"></img>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href="/#" className="btn btn-primary">+</a>
            </div>
        </div>
    )
}

export default Item;
