import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  // Removed unnecessary parentheses

// Optional: Keep in development for potential issue detection
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

