import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import {Store, Persistor} from './redux/store/Store';

ReactDOM.render(
  <Provider store={ Store }>
    <BrowserRouter>
      <PersistGate persistor={ Persistor }>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
