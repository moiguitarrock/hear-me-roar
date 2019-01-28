import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import './index.css';
import Main from './components/Main/Main.container';
import * as serviceWorker from './serviceWorker';

const middleware = applyMiddleware(thunk);

const composedMiddleware = compose(middleware);
const store = createStore(reducers, {}, composedMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
