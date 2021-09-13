import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Para traer las categorias y añadirlas al NavBar
import { CartProvider } from './CartContext';
import Cart from './components/Cart/Cart';
// Firebase
import { db } from './firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const App = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const docs = [];
    const q = query(collection(db, 'categories'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push(doc.data().title);
    });
    setCategories(docs);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className='App'>
          <NavBar data={categories} />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting='Bienvenidos a nuestra tienda online' />
            </Route>
            <Route path='/category/:id'>
              <ItemListContainer greeting='Bienvenidos a nuestra tienda online' />
            </Route>
            <Route path='/item/:id' component={ItemDetailContainer} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
