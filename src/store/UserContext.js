import React, { createContext } from 'react'

const UserContext = React.createContext({
    isAuthenticated : false, 
    accessToken : '',
    setIsAuthenticated : (auth) => {},
    setAccessToken : (token) => {}
});

export default UserContext;
