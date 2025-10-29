import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PRODUCTOS, { moneyCLP } from '../../data/productos'
import { useCart } from '../../context/CartContext'
import './producto.css'

export default function Producto(){
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCTOS.find(p => p.id === id)
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(product ? product.img : '')
  const [zoomOpen, setZoomOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const { addItem, items } = useCart()

  if(!product) return (
    <section className="not-found">
      <h2>Producto no encontrado</h2>
      <p>El producto con id <strong>{id}</strong> no existe.</p>
      <button onClick={() => navigate('/productos')} className="btn-primary">Volver a productos</button>
    </section>
  )

  const inCartQty = items.find(i => i.id === product.id)?.qty || 0

  const handleAdd = () => {
    addItem(product, qty)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 1400)
  }

  const thumbnails = product.images || [product.img]

  return (
    <div className="producto-wrap">
      <div className="prod-gallery">
        <div className="prod-main" onClick={() => setZoomOpen(true)}>
          <img src={activeImg} alt={product.titulo} loading="lazy" />
        </div>
        <div className="thumbnails">
          {thumbnails.map((t, idx) => (
            <div key={idx} className="thumb" onClick={() => setActiveImg(t)}>
              <img src={t} alt={`${product.titulo} ${idx+1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="prod-meta">
        <h1>{product.titulo} {inCartQty > 0 && <span className="in-cart-badge">En carrito: {inCartQty}</span>}</h1>
        <div className="prod-attrs">{product.attrs}</div>
        <div className="prod-price">{moneyCLP(product.precio)}</div>
        <p className="prod-desc">{product.desc}</p>

        <div className="qty-row">
          <label className="qty-label">Cantidad</label>
          <div className="qty-box">
            <button type="button" onClick={() => setQty(q => Math.max(1, q-1))}>-</button>
            <input value={qty} readOnly />
            <button type="button" onClick={() => setQty(q => Math.min(99, q+1))}>+</button>
          </div>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleAdd}>Agregar al carrito</button>
          <button className="btn-ghost" onClick={() => navigate('/productos')}>Volver</button>
        </div>

        <div className="meta-mini">
          <span>Envíos a todo Chile</span>
          <span>30 días para cambios</span>
          <span>Pago seguro</span>
        </div>
      </div>

      {zoomOpen && (
        <div className="zoom-overlay" onClick={() => setZoomOpen(false)}>
          <img src={activeImg} alt={product.titulo} />
        </div>
      )}

      <div className={`toast ${toastVisible ? 'visible' : ''}`}>Se añadió {qty} al carrito</div>
    </div>
  )
}
