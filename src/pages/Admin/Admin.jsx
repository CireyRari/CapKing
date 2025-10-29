import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'
import './admin.css'

function AdminContent(){
  return (
    <div className="admin-wrapper">
      <div className="admin-header">
        <h1>Panel de administración (demo)</h1>
        <div className="admin-tabs">
          <button className="active">Productos</button>
          <button>Órdenes</button>
        </div>
      </div>

      <section className="admin-section">
        <p className="admin-note">Aquí podrías listar órdenes, productos o gestionar la tienda. Esta ruta está protegida y sólo usuarios con isAdmin=true pueden acceder.</p>
      </section>
    </div>
  )
}

export default function Admin(){
  return (
    <ProtectedRoute adminOnly>
      <AdminContent />
    </ProtectedRoute>
  )
}
