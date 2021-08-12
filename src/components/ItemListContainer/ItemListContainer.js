import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className="container">
                <h1>{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer;
