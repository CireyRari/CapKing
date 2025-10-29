import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { moneyCLP } from '../../data/productos'
import './orden.css'

export default function Orden(){
  const { state } = useLocation()
  const order = state?.order

  if(!order) return (
    <section className="orden-page">
      <h2>Orden no encontrada</h2>
      <p className="orden-note">No se encontró información de la orden. Regresa a <Link to="/productos">productos</Link>.</p>
    </section>
  )

  return (
    <section className="orden-page">
      <h2>¡Gracias por tu compra!</h2>
      <p className="orden-note">Tu orden <strong>{order.id}</strong> fue creada correctamente.</p>

      <div className="orden-box">
        <h3>Resumen</h3>
        <div className="orden-items">
          {order.items.map(i => (
            <div key={i.id} className="orden-row">
              <div className="orden-item-left">
                <img src={i.img} alt={i.titulo} className="orden-item-img" />
                <div>
                  <div className="orden-item-title">{i.titulo}</div>
                  <div className="orden-item-qty">x{i.qty}</div>
                </div>
              </div>
              <div className="orden-item-price">{moneyCLP(i.precio * i.qty)}</div>
            </div>
          ))}
        </div>

        <div className="orden-total-row">
          <div>Total</div>
          <div>{moneyCLP(order.totalPrice)}</div>
        </div>

        <div className="orden-customer">
          <h4>Datos del cliente</h4>
          <div>{order.customer.nombre}</div>
          <div className="orden-note">{order.customer.email}</div>
          <div className="orden-note">{order.customer.direccion}</div>
        </div>
      </div>

      <div className="orden-footer">
        <Link to="/productos" className="btn-primary-link">Seguir comprando</Link>
      </div>
    </section>
  )
}
