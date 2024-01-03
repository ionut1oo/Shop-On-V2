import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from '../src/components/App';
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Shop-On-V2'>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
