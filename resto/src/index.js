import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContex from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoService = new RestoService();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <RestoServiceContex.Provider value={restoService}>
        <Router>
          <App/>
        </Router>
      </RestoServiceContex.Provider>
    </ErrorBoundry>
  </Provider>
)

