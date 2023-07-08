import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import './src/index.css';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
