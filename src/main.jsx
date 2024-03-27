import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AddingPage from './pages/AddingPage/AddingPage.jsx'
import SelectAquariumPage from './pages/SelectAquariumPage/SelectAquariumPage.jsx'
import AquariumPage from './pages/AquariumPage/AquariumPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
  },
  {
    path: '/registration/',
    element: <RegistrationPage/>
  },
  {
    path: '/home/',
    element: <HomePage/>
  },
  {
    path: '/add/device/',
    element: <AddingPage/>
  },
  {
    path:'/aquarium/all/',
    element: <SelectAquariumPage/>
  },
  {
    path:'/aquarium/:id/',
    element: <AquariumPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
