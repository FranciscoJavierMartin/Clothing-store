import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './provider/cart/cartProvider';
import './index.scss';
import App from './App';

config();

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
