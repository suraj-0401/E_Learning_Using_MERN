import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ContextProvider from './context/ContextProvider';
import { ThemeProvider } from './context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <ContextProvider>
  <BrowserRouter>
  <GoogleOAuthProvider clientId="855624715451-1uljifb0d0kf3sk4579qke52vj165avr.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>;
  </BrowserRouter>
  </ContextProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
