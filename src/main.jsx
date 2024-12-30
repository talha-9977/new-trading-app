
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'; // Your global styles
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Your font awesome styles

// // Ensure you're using createRoot from 'react-dom/client'
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // If you have global styles
// src/index.js or src/main.js
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Tailwind's styles are applied


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);