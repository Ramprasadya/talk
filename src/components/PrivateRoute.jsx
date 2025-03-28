import React, { useEffect } from 'react'
import { Outlet, Route, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const profile  = false;
    const navigate = useNavigate()
    useEffect(()=>{

      if (!profile){
         navigate("/signin")
      }
    },[])
    
    
  return (
  <>
  <Outlet />
  </>
  )
}

export default PrivateRoute