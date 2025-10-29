import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'capking_cart_v1'

export function CartProvider({ children }){
  const [items, setItems] = useState(() => {
    try{
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    }catch(e){
      return []
    }
  })

  useEffect(() => {
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) }catch(e){}
  }, [items])

  const addItem = (product, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === product.id)
      if(idx >= 0){
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty }
        return copy
      }
      return [...prev, { id: product.id, titulo: product.titulo, precio: product.precio, img: product.img, qty }]
    })
  }

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))
  const updateQty = (id, qty) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  const clear = () => setItems([])

  const totalCount = items.reduce((s, i) => s + i.qty, 0)
  const totalPrice = items.reduce((s, i) => s + (i.precio * i.qty), 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const ctx = useContext(CartContext)
  if(!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}

export default CartContext
