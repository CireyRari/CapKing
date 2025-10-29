import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './register.css'

export default function Register(){
  const { register } = useAuth()
  const [form, setForm] = useState({ nombre:'', email:'', password:'' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    const res = await register(form)
    if(!res.ok) setError(res.message)
    else navigate('/')
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Crear cuenta</h2>
        <form onSubmit={handle} className="form">
          <div className="field"><input placeholder="Nombre completo" value={form.nombre} onChange={e => setForm({...form,nombre:e.target.value})} /></div>
          <div className="field"><input placeholder="Email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} /></div>
          <div className="field"><input type="password" placeholder="Contraseña" value={form.password} onChange={e => setForm({...form,password:e.target.value})} /></div>
    {error && <div className="error">{error}</div>}
          <div><button type="submit" className="btn">Registrar</button></div>
        </form>
      </div>
    </section>
  )
}
