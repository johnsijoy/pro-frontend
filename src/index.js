import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App'; // Ensure App.js exists in the same directory

// Create a React root using ReactDOM for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Scroll to the bottom, then back to the top after a brief delay
window.scrollTo({
  top: document.body.scrollHeight,
  behavior: 'smooth'
});

setTimeout(function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, 1000);  // Delay for scrolling back to top
