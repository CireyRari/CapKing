import React from 'react'
import './contact.css'

export default function Contact(){
  return (
    <section className="hero-contact">
      <div>
        <h1>Contáctanos</h1>
        <p>¿Tienes dudas? Escríbenos y te responderemos lo antes posible.</p>
        <form className="form form-centered">
          <input placeholder="Nombre" />
          <input placeholder="Correo" />
          <textarea placeholder="Mensaje" />
          <button type="submit" className="btn">Enviar</button>
        </form>

        <div className="contact-side contact-side-centered">
          <div className="contact-box">
            <p className="mini-title">Teléfono</p>
            <p className="mini-line">+1 234 567 890</p>
          </div>
          <div className="contact-box">
            <p className="mini-title">Email</p>
            <p className="mini-line">contacto@capkingstore.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
