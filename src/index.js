import React from 'react';
import ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import TopBar from './TopBar';


const topBar = ReactDOMClient.createRoot(document.getElementById('top-content'));
const pageContent =  ReactDOMClient.createRoot(document.getElementById('page-content'));

pageContent.render( 
    < React.StrictMode >
    < App / >
    </React.StrictMode>,
);

topBar.render(
    < React.StrictMode >
    < TopBar / >
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();