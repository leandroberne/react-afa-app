import React, { useState, useContext } from 'react';
import './Payment.css';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../../firebase';

const Payment = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);

  const [client, setClient] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [purchaseID, setPurchaseID] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const addPurchase = async (e) => {
    const purchases = db.collection('purchases');
    const order = {
      buyer: {
        name: client.name,
        phone: client.phone,
        email: client.email,
      },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice(cart),
    };

    e.preventDefault();

    // Actualizacion de stock
    const productsToUpdate = db.collection('products').where(
      firebase.firestore.FieldPath.documentId(),
      'in',
      cart.map((item) => item.id)
    );
    const query = await productsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];
    query.docs.forEach((docSnapshot, idx) => {
      if (docSnapshot.data().stock >= cart[idx].quantity) {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cart[idx].quantity,
        });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    });

    if (outOfStock.length === 0) {
      batch.commit();
    }

    // Hasta aqui.

    await purchases
      .add(order)
      .then((docRef) => {
        setPurchaseID(docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    clear();
    e.target.reset();
  };

  return (
    <>
      <h1>Payment (garpa loco)</h1>
      <p>Total a garpar: $ {totalPrice(cart)}</p>
      <form onSubmit={addPurchase}>
        <div>
          <label htmlFor='name'>Nombre: </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Ingrese Nombre'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='phone'>Telefono: </label>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Ingrese Telefono'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Ingrese Email'
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>PAGAR</button>
      </form>
      {purchaseID && (
        <div>
          <h3>
            Su numero ID de compra es: <strong>{purchaseID}</strong>
          </h3>
          <Link to='/'>
            <button className='btn btn-primary'>Volver a la tienda</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Payment;
