import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Para traer las categorias y añadirlas al NavBar
import axios from 'axios';
import { CartProvider } from './CartContext';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products/categories').then((response) =>
      setCategories(response.data)
    );
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
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
