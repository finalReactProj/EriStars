import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ element,isAuthenticate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
useEffect(() => {
    axios.get("http://localhost:3001/api/Auth",{withCredentials:true})
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