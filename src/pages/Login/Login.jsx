import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './login.css'

export default function Login(){
  const { login } = useAuth()
  const [form, setForm] = useState({ email:'', password:'' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    const res = await login(form)
    if(!res.ok) setError(res.message)
    else navigate('/')
  }

  return (
    <section className="login-page">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handle} className="login-form">
        <input className="input" placeholder="Email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} />
        <input className="input" type="password" placeholder="Contraseña" value={form.password} onChange={e => setForm({...form,password:e.target.value})} />
        {error && <div className="error">{error}</div>}
        <div className="login-actions">
          <button type="submit" className="btn-primary">Entrar</button>
          <Link to="/register" className="btn-link">Crear cuenta</Link>
        </div>
      </form>
    </section>
  )
}
