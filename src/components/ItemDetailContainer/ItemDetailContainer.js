import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { db } from '../../firebase';

const ItemDetailContainer = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = () => {
    db.collection('products').onSnapshot((querySnapShot) => {
      const docs = [];
      querySnapShot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs.filter((element) => element.id === productId));
    });
  };

  useEffect(() => {
    getProduct();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, [productId]);

  return (
    <div className='ItemDetailContainer-container'>
      <h1>Detalle de producto</h1>
      {isLoading ? <Spinner /> : <ItemDetail item={product[0]} />}
    </div>
  );
};

export default ItemDetailContainer;
