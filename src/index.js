import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as MyRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyRouter>
        <App />
    </MyRouter>
    
);