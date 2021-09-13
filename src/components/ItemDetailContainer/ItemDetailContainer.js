import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { db } from '../../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const ItemDetailContainer = ({ match }) => {
  let productId = match.params.id;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const docs = [];
      const q = query(collection(db, 'products'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs.filter((element) => element.id === productId));
    };
    getProduct();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [productId]);

  return (
    <div>
      <h1>Item Detail</h1>
      {isLoading ? <Spinner /> : <ItemDetail item={product} />}
    </div>
  );
};

export default ItemDetailContainer;
