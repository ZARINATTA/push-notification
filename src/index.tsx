import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './firebase/firebase-messaging-sw';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
