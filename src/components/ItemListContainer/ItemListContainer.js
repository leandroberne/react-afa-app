import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemList />
            </div>
        </div>
    );
}

export default ItemListContainer;