import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/modalContact/Modal';
import {Background} from "./components/background/Background";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Background>
            <App/>
        </Background>
    </React.StrictMode>
);


