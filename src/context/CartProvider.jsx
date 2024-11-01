import { CartContext } from './CartContext'
import { useState } from 'react'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }

    setCart((previousState) => [
      ...previousState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const deleteProduct = (product) => {
    const newCart = cart.filter((element) => !(product.id === element.id))
    setCart(newCart)
  }

  const cleanCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, cleanCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  )
}
