import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { db } from '../../firebase';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getItems = () => {
    db.collection('products').onSnapshot((querySnapShot) => {
      const docs = [];
      querySnapShot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(
        id === undefined
          ? docs
          : docs.filter((element) => element.category === id)
      );
    });
  };

  useEffect(() => {
    getItems();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [id]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div>{isLoading ? <Spinner /> : <ItemList data={items} />}</div>
    </div>
  );
};

export default ItemListContainer;
