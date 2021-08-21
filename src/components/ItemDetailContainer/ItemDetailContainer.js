import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        axios('https://fakestoreapi.com/products/2')
            .then(response => setProduct(response.data));
    }, []);

    return (
        <div>
            <ItemDetail data={product} />
        </div>
    );
}

export default ItemDetailContainer;
