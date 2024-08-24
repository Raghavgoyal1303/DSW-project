// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global CSS file
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This connects to the div with id "root" in public/index.html
);
