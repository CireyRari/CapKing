import React from 'react'
import { Link } from 'react-router-dom'
import { moneyCLP } from '../../data/productos'
import { useCart } from '../../context/CartContext'
import './productcard.css'

export default function ProductCard({ product }){
  const { addItem } = useCart()

  return (
    <article className="pc-card">
      <Link to={`/producto/${product.id}`} className="pc-link">
        <div className="pc-figure">
          <img src={product.img} alt={product.titulo} />
        </div>
        <h3 className="pc-title">{product.titulo}</h3>
        <div className="pc-attrs">{product.attrs}</div>
        <div className="pc-price">{moneyCLP(product.precio)}</div>
      </Link>
      <div className="pc-actions">
        <button onClick={() => addItem(product,1)} className="pc-btn">Agregar</button>
        <Link to={`/producto/${product.id}`} className="pc-link-ghost">Ver</Link>
      </div>
    </article>
  )
}
