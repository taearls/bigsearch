import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './index.scss';
import App from './App';

ReactDOM.render(
  <Router>
    <Route path="/:movie?" component={App}></Route>
  </Router>, 
  document.getElementById('root')
);
