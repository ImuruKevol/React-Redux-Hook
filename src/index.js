import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import './index.css';
import * as serviceWorker from './serviceWorker';

import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
