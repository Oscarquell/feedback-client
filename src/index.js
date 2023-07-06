import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import LoadingButtonsTransition from "./test";


axios.defaults.baseURL = 'https://feedback-server.vercel.app/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       {/*<LoadingButtonsTransition />*/}
        <App />
    </BrowserRouter>

);


