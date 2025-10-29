import React from 'react'
import './footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="wrap">© {new Date().getFullYear()} CapKingStore</div>
    </footer>
  )
}
