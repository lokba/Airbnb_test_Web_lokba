import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import RootReducer from './store';


const store = createStore(RootReducer, composeWithDevTools());


//추후에 구현

// function loadUser() {
//   try {
//     const jwt = localStorage.getItem("ACCESS_TOKEN");

//     if (!jwt) return;


//   } catch (e) {
//     console.log('localstorage is not working!');
//   }
// }

// loadUser();


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
