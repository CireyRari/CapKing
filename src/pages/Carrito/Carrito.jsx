import React from 'react'
import { useCart } from '../../context/CartContext'
import { moneyCLP } from '../../data/productos'
import { useNavigate } from 'react-router-dom'
import './carrito.css'

export default function Carrito(){
  const { items, removeItem, updateQty, clear, totalCount, totalPrice } = useCart()
  const navigate = useNavigate()

  if(items.length === 0) return (
    <section className="cart-empty">
      <h2>Tu carrito está vacío</h2>
      <p>Agrega productos desde la página de productos o el detalle.</p>
    </section>
  )

  return (
    <section className="cart-page">
      <h2>Carrito</h2>
      <div className="cart-list">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="thumb"><img src={item.img} alt={item.titulo} /></div>
            <div>
              <div className="title">{item.titulo}</div>
              <div className="price">{moneyCLP(item.precio)}</div>
            </div>
            <div className="actions">
              <input className="qty" type="number" min={1} value={item.qty} onChange={e => updateQty(item.id, Math.max(1, Number(e.target.value||1)))} />
              <button onClick={() => removeItem(item.id)} className="btn-danger">Eliminar</button>
            </div>
          </div>
        ))}

        <div className="cart-summary">
          <div>Productos: <strong>{totalCount}</strong></div>
          <div className="cart-total-price">{moneyCLP(totalPrice)}</div>
        </div>

        <div className="cart-actions">
          <button onClick={() => navigate('/checkout')} className="btn-primary">Pagar</button>
          <button onClick={() => clear()} className="btn-ghost">Vaciar carrito</button>
        </div>
      </div>
    </section>
  )
}
