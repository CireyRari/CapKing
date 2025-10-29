import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function ProtectedRoute({ children, adminOnly=false }){
  try{
    const { user } = useAuth()
    if(!user) return <Navigate to="/login" replace />
    if(adminOnly && !user.isAdmin) return <Navigate to="/" replace />
    return children
  }catch(e){
    return <Navigate to="/login" replace />
  }
}
