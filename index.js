import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './about-us.js';
import Contact from './contact';
import Consultation from './consultation';
import Career from './career';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Routes>
    <Route path="/" element={ <App/>}></Route>
    <Route path="/about" element={ <AboutUs/>}></Route>
    <Route path="/contact" element={ <Contact/>}></Route>
    <Route path="/consultation" element={ <Consultation/>}></Route>
    <Route path="/careers" element={ <Career/>}></Route>
  </Routes>
  </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
