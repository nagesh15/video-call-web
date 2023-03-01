import Login from './Pages/login';
import React, { useState,useContext } from 'react';
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import Register from './Pages/register';
import Dashboard from './Pages/dashboard';
import Home from './Pages/home';
import CallHistory from './Pages/call-history';
import UserContext from './store/UserContext';
import Logout from './Pages/logout';


const router = createBrowserRouter([
  { path : '/' , element : <Login />},
  { path : '/register', element : <Register />},
  {
    path : '/dashboard', 
    element : <Dashboard />,
    children :  [
      {path : '/dashboard', element : <Home />},
      {path : 'call_history' , element : <CallHistory />},
      {path : 'logout' , element : <Logout />}
    ]  
  }
])

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  return (
    <UserContext.Provider value={{isAuthenticated,accessToken, setIsAuthenticated, setAccessToken}}>
        <RouterProvider router={router} />
    </UserContext.Provider>
      
  );
}

export default App
