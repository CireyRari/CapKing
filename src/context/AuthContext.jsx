import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'capking_auth_v1'
const USERS_KEY = 'capking_users_v1'

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try{ const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null }catch(e){return null}
  })

  useEffect(() => {
    try{ if(user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); else localStorage.removeItem(STORAGE_KEY) }catch(e){}
  }, [user])

  const register = ({ nombre, email, password, isAdmin=false }) => {
    try{
      const raw = localStorage.getItem(USERS_KEY)
      const users = raw ? JSON.parse(raw) : []
      if(users.find(u => u.email === email)){
        return { ok:false, message: 'Email ya registrado' }
      }
      const newUser = { id: `u_${Date.now()}`, nombre, email, password, isAdmin }
      users.push(newUser)
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
      setUser({ id: newUser.id, nombre: newUser.nombre, email: newUser.email, isAdmin: newUser.isAdmin })
      return { ok:true }
    }catch(e){ return { ok:false, message: 'Error al registrar' } }
  }

  const login = ({ email, password }) => {
    try{
      const raw = localStorage.getItem(USERS_KEY)
      const users = raw ? JSON.parse(raw) : []
      const found = users.find(u => u.email === email && u.password === password)
      if(!found) return { ok:false, message: 'Credenciales inválidas' }
      setUser({ id: found.id, nombre: found.nombre, email: found.email, isAdmin: found.isAdmin })
      return { ok:true }
    }catch(e){ return { ok:false, message: 'Error al loguear' } }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const ctx = useContext(AuthContext)
  if(!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

export default AuthContext
