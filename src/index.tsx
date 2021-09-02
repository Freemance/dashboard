import React from 'react';
import ReactDOM from 'react-dom';

// Providers
import { ApolloProvider } from '@apollo/client';

import Client from './providers/graphql/apollClient';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
