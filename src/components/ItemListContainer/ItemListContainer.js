import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div className="container">
                <ItemCount stock={5} />
                <ItemCount stock={10} initial={1} />
                <ItemCount stock={20} initial={2} />
            </div>
        </div>
    );
}

export default ItemListContainer;