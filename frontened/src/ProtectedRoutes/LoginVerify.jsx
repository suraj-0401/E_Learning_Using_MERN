import React, { useContext} from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import CreateContext from '../context/CreateContext';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const {useDetails}=useContext(CreateContext);
  const token=useDetails.token;
  if(!token) navigate('/login');
  else redirect('/');
  return (
    <></>
  );
};

export default ProtectedRoute;
