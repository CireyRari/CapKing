import React from 'react'
import PRODUCTOS from '../../data/productos'
import ProductCard from '../../components/ProductCard/ProductCard'
import './productos.css'

export default function Productos(){
  return (
    <section className="productos-page">
      <h2>Productos</h2>
      <p className="muted">Listado de productos disponibles.</p>
      <div className="productos-grid">
        {PRODUCTOS.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
