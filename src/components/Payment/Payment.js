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
    e.preventDefault();
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
      <h1>Finalizar compra</h1>
      <h3 className='totalEnc'>Total a abonar: $ {totalPrice(cart)}</h3>
      <div className='form-container'>
        <div className='inner-container'>
          <div className='row'>
            <div className='col-2'></div>
            <form className='col-8' onSubmit={addPurchase}>
              <div className='mb-3 col-12'>
                <label htmlFor='name' className='form-label text-black'>
                  Nombre
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  placeholder='Ingresá tu nombre'
                  onChange={handleInputChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='phone' className='form-label text-black'>
                  Telefono
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='phone'
                  id='phone'
                  placeholder='Ingresá tu telefono'
                  onChange={handleInputChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label text-black'>
                  Correo electrónico
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='email'
                  placeholder='Ingresá tu e-mail'
                  onChange={handleInputChange}
                />
              </div>
              {purchaseID ? (
                <div className='divPurchaseId'>
                  <h3>
                    Su numero ID de compra es: <strong>{purchaseID}</strong>
                  </h3>
                  <p>El mismo será enviado a su casilla de correo.</p>
                  <Link to='/'>
                    <button id='btn-volver' className='btn btn-primary'>
                      Volver a la tienda
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  id='btn-finalizar'
                  className='btn btn-danger col-12'
                  type='submit'
                >
                  Pagar
                </button>
              )}
            </form>
            <div className='col-2'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
