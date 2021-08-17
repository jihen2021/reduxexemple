import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import allReducers from'./reducers'
const store= createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
//donner l'acee au store a notre  app  tout les component en l acces au store

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider> ,
  document.getElementById('root')
);

reportWebVitals();
