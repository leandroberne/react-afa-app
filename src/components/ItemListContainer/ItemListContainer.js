import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemList data={items}/>
            </div>
        </div>
    );
}

export default ItemListContainer;