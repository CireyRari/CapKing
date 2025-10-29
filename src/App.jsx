import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Productos from './pages/Productos/Productos'
import Producto from './pages/Producto/Producto'
import Carrito from './pages/Carrito/Carrito'
import Checkout from './pages/Checkout/Checkout'
import Orden from './pages/Orden/Orden'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Blogs from './pages/Blogs/Blogs'
import Admin from './pages/Admin/Admin'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orden" element={<Orden />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
