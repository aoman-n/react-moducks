import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, enhancer)
// sagaの実行
sagaMiddleware.run(function*() {
  yield sagas;
});

ReactDOM.render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);
