import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './provider/cart/cartProvider';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { resolvers, typeDefs } from './graphql/resolvers';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';

config();

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers,
  typeDefs
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.register();