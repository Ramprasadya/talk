import React, { useEffect } from 'react'
import { Outlet, Route, useNavigate } from 'react-router-dom';

const PublicRoute = () => {
    const profile  = false;
    const navigate = useNavigate()
    useEffect(()=>{

        if (profile){
            navigate("/")
        }
    },[])
    
    
  return (
  <>
  <Outlet />
  </>
  )
}

export default PublicRoute