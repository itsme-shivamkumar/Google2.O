import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as MyRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultContextProvider>
        <MyRouter>
            <App />
        </MyRouter>
    </ResultContextProvider>    
)