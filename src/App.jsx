import React from 'react';

import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './counterSlice';

import store from './store';
import './styles.css'

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Producto 1', precio: 10 },
    { id: 2, name: 'Producto 2', precio: 20 },
    { id: 3, name: 'Producto 3', precio: 30 },
    { id: 4, name: 'Producto 4', precio: 40 },
    { id: 5, name: 'Producto 5', precio: 50 },
    { id: 6, name: 'Producto 6', precio: 60 },
  ];

  return (
    <div className="product-list">
      
      {products.map((product) => (
        <div key={product.id} className="product">
          <p>{product.name}</p>
          <p>Precio: ${product.price}</p>
          <button className="button" onClick={() => dispatch(addToCart(product))}>Agregar</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
     
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.name}</p>
          <p>Precio: ${item.price}</p>
          <button className="remove-button" onClick={() => dispatch(removeFromCart(index))}>Remover</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="app">
      <h2>Productos Disponibles</h2>
        <ProductList />
        <h2>Carrito</h2>
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
