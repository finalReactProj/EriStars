import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { myContext } from '../../App';

const ProtectedRoute = ({ element, isAuthenticate }) => {
    const url = useContext(myContext);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
useEffect(() => {
    axios.get(`${url}/api/Auth`,{withCredentials:true})
      .then(res =>  setIsAuthenticated(res.data.message)  )
        .catch(error => console.log(error.response.data.message));
}, [])
if(isAuthenticated===null) return <p>Loading...</p>
  return (
    <>
      {isAuthenticate(isAuthenticated)}
      {isAuthenticated ? element : <Navigate to="/login" />}
    </>
  )
 
}

export default ProtectedRoute