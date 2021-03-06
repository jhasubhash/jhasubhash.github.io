import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './js/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

var hist = createBrowserHistory();
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL} history={hist}>
  <Switch>
      <Route path="/tree" component={() => { 
        window.location.href = 'https://jhasubhash.github.io/tree/'; 
        return null;
      }} exact/>
      <Route path="/blog" component={() => { 
        window.location.href = 'https://jhasubhash.github.io/blog/'; 
        return null;
      }} exact/>
      <Route path="/gallery" component={() => { 
        window.location.href = 'https://jhasubhash.github.io/gallery/'; 
        return null;
      }} exact/>
      <Route path="/" component={Home}  exact/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
