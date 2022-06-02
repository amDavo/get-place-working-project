import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRouter({ children }) {
  const auth = useSelector((state) => state.user)

  return (
    auth ? children :<Navigate to="/main" />


  )
}

export default PrivateRouter;
