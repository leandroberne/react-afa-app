import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({match}) => {
    let productId = match.params.id;
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${productId}`)
            .then(response => setProduct(response.data));
    }, [productId]);

    return (
        <div>
            <ItemDetail data={product} />
        </div>
    );
}

export default ItemDetailContainer;
