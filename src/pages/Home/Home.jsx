import { Link } from 'react-router-dom'
import PRODUCTOS from '../../data/productos'
import ProductCard from '../../components/ProductCard/ProductCard'
import './home.css'

export default function Home(){
  const featured = PRODUCTOS.slice(0,4)
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>CapKingStore</h1>
          <p>Gorras y accesorios de colección</p>
          <Link to="/productos" className="hero-button">Ver productos</Link>
        </div>
      </section>

      <section id="productos" className="container productos-section">
        <div className="productos-header">
          <h2 className="productos-title">Destacados</h2>
        </div>
        <div className="grid">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
