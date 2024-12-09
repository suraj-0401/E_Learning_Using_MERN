import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetch('/api/protected', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch(() => {
          navigate('/login'); 
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Protected Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ProtectedRoute;
