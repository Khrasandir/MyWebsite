import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import About from './components/pages/About.jsx';
import Home from './components/pages/Home.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Contact from './components/pages/Contact.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
