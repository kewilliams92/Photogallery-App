import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './components';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '../public/index.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>
);