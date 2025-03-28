import React, { useContext, useEffect } from 'react'
import { Outlet, Route, useNavigate } from 'react-router-dom';
import ProfileContext from '../context/ProfileContext';

const PrivateRoute = () => {
  const {profile} =  useContext(ProfileContext)
    
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