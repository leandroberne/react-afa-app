import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const categoryId = useParams();

    useEffect(() => {
        if (categoryId.id === undefined) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setItems(data))
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setItems(data.filter(element => element.category === categoryId.id)))
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                { isLoading ? <Spinner /> : <ItemList data={items}/> }
            </div>
        </div>
    );
}

export default ItemListContainer;