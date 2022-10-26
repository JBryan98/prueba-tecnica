import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SongContextProvider } from './context/SongContext';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SongContextProvider>
        <App />
    </SongContextProvider>
);


