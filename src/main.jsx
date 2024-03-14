import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
  },
  {
    path: '/registration/',
    element: <RegistrationPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
