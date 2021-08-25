import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = ({match}) => {
    let productId = match.params.id;
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${productId}`)
            .then(response => setProduct(response.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [productId]);

    return (
        <div>
            <h1>Item Detail</h1>
            { isLoading ? <Spinner /> : <ItemDetail data={product} /> }
        </div>
    );
}

export default ItemDetailContainer;
