import React, { useState } from 'react';
import CreateContext from './CreateContext.jsx';

function ContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    email: localStorage.getItem('email') || " ",
    role: localStorage.getItem('role') || " ",
    name: localStorage.getItem('name') || " ",
    token: localStorage.getItem('token') || " ",
    userId: localStorage.getItem('userId') || " "

  });

  const updateUserDetails = (userData) => {
    setUserDetails(userData);
  };

  return (
    <CreateContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </CreateContext.Provider>
  );
}



export default ContextProvider;
