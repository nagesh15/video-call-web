import React, { createContext } from 'react'

const UserContext = React.createContext({
    isAuthenticated : false, 
    setIsAuthenticated : (auth) => {}
});

export default UserContext;
