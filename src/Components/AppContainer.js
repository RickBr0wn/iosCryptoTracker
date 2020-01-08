import React from 'react';
import {Platform} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import App from '../../App';
import RootReducer from '../Reducers';

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk, promise, logger)),
);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
