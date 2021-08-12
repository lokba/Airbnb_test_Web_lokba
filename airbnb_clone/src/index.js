import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import RootReducer from './store';
import { getUserId } from './store/userInfo';


const store = createStore(RootReducer, composeWithDevTools());

function loadUser() {
  try {
    const jwt = localStorage.getItem("ACCESS_TOKEN");

    if (!jwt) return;

    const headers = {
      "x-access-token": jwt
    }
    const storeUserId = async () => {
      const response = await axios.get('https://dev.rodin.club/users/login/ids', { headers });

      store.dispatch(getUserId(response.data.result));
    }

    storeUserId();
  } catch (e) {
    console.log('localstorage is not working!');
  }
}

loadUser();


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
