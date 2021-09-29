import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';
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
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, [productId]);

  return (
    <div className='ItemDetailContainer-container'>
      <h1>Detalle de producto</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='bread-container'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link className='text-white' to='/'>
                    <span className='text-white'>inicio</span>
                  </Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  {product[0].category}
                </li>
              </ol>
            </nav>
          </div>
          <ItemDetail item={product[0]} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
