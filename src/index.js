import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={ Store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
