import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: 'login/',
    element: <Login/>
  },
  {
    path: 'register/',
    element: <Register/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/> 
  </React.StrictMode>,
)
