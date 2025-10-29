import React from 'react'
import './blogs.css'

export default function Blogs(){
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Blog</h1>
          <p className="intro">Novedades y artículos sobre gorras y lanzamientos.</p>
        </div>
      </section>

      <section className="blog-grid">
        <article className="card">
          <div className="card__img"><img src="/assets/images/products/cap-1.webp" alt="" /></div>
          <div className="card__body">
            <h3 className="card__title">Entrada de ejemplo</h3>
            <p className="card__desc">Resumen corto de la entrada del blog.</p>
          </div>
        </article>
      </section>
    </div>
  )
}
