import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import stroe from './store/store';

ReactDOM.render(
 <React.StrictMode>
 <Provider store={stroe}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
