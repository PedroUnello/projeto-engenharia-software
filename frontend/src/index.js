import React from 'react';
import App from './templates/App/app';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const pageContent = ReactDOMClient.createRoot(document.getElementById('root'));
//Renders App in div with root ID
pageContent.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
