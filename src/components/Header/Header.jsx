import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import './header.css'

export default function Header(){
  let totalCount = 0
  let auth = null
  try{ const cart = useCart(); totalCount = cart.totalCount }catch(e){ /* no provider present */ }
  try{ auth = useAuth() }catch(e){ auth = null }

  return (
    <header className="site-header">
      <div className="wrap">
        <h1 className="site-brand">CapKingStore</h1>
        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/carrito">Carrito{ totalCount > 0 ? <span className="cart-badge">{totalCount}</span> : null }</Link>
          {auth && auth.user ? (
            <span className="auth-actions">
              {auth.user.isAdmin && <Link to="/admin">Admin</Link>}
              <span>Hola, {auth.user.nombre}</span>
              <button onClick={() => auth.logout()} className="btn-ghost">Salir</button>
            </span>
          ) : (
            <span className="auth-actions">
              <Link to="/login">Entrar</Link>
              <Link to="/register">Registro</Link>
            </span>
          )}
        </nav>
      </div>
    </header>
  )
}
