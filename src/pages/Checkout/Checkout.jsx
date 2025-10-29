import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { moneyCLP } from '../../data/productos'
import './checkout.css'

export default function Checkout(){
  const { items, totalCount, totalPrice, clear } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ nombre:'', email:'', direccion:'', metodo:'transferencia' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // simple validation
    if(!form.nombre || !form.email || !form.direccion){
      alert('Completa nombre, email y dirección')
      return
    }
    setSubmitting(true)
    // simulate API / payment delay
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString(),
        customer: { ...form },
        items,
        totalCount,
        totalPrice
      }
      clear()
      navigate('/orden', { state: { order } })
    }, 900)
  }

  if(items.length === 0) return (
    <section className="wrap">
      <h2>No hay productos en el carrito</h2>
      <p>Añade productos antes de continuar al pago.</p>
    </section>
  )

  return (
    <section className="wrap resume-grid">
      <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Nombre completo</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} />

            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} />

            <label>Dirección</label>
            <input name="direccion" value={form.direccion} onChange={handleChange} />

            <label>Método de pago (simulado)</label>
            <select name="metodo" value={form.metodo} onChange={handleChange}>
              <option value="transferencia">Transferencia bancaria</option>
              <option value="webpay">Webpay (simulado)</option>
              <option value="paypal">PayPal (simulado)</option>
            </select>

            <button type="submit" disabled={submitting} className="btn-primary">{submitting ? 'Procesando...' : 'Pagar ahora'}</button>
          </div>
        </form>
      </div>

      <aside className="box">
        <h3>Resumen de la orden</h3>
  <div className="summary-list">
          {items.map(i => (
            <div key={i.id} className="r-item">
              <img src={i.img} alt={i.titulo} />
              <div>
                <div className="r-item-title">{i.titulo}</div>
                <div className="r-item-attrs">x{i.qty}</div>
              </div>
              <div className="r-item-price">{moneyCLP(i.precio * i.qty)}</div>
            </div>
          ))}

          <div className="summary-row">Total items <strong>{totalCount}</strong></div>
          <div className="summary-row total">{'Total'} <span>{moneyCLP(totalPrice)}</span></div>
        </div>
      </aside>
    </section>
  )
}
