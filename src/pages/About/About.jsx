import React from 'react'
import './about.css'

export default function About(){
  return (
    <div className="vista">
      <div className="panel">
        <div>
          <h1>Sobre CapKingStore</h1>
          <p className="tagline">Gorras y accesorios de colección</p>
          <p className="desc">CapKingStore es una tienda ficticia creada para demostrar la migración a React. Aquí puedes encontrar gorras de distintos estilos y colecciones.</p>
          <p className="desc">Esta página es una versión simplificada; podemos copiar el contenido real de <code>about.html</code> si lo prefieres.</p>
          <a className="btn" href="/productos">Ver productos</a>
        </div>

        <aside className="equipo">
          <h3>Equipo</h3>
          <ul className="devs">
            <li>Desarrollador: Ejemplo</li>
            <li>Diseñador: Ejemplo</li>
            <li>Contenido: Ejemplo</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
