import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './scss/main.scss';

import App from './App';

const app = (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(
    app
    ,document.getElementById('app-root')
);
