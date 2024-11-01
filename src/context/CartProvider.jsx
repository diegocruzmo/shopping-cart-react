import { useReducer } from 'react'
import { CartContext } from './CartContext'
//import { useState } from 'react'
import { cartReducer, initialState } from '../reducers/CartReducer.js'

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })

  const deleteProduct = (product) =>
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: product
    })

  const cleanCart = () =>
    dispatch({
      type: 'CLEAN_CART'
    })

  return { state, addToCart, cleanCart, deleteProduct }
}

export const CartProvider = ({ children }) => {
  const { state, addToCart, cleanCart, deleteProduct } = useCartReducer()
  //const [cart, setCart] = useState([])

  /*   const addToCart = (product) => {
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
  } */

  /*   const deleteProduct = (product) => {
    const newCart = cart.filter((element) => !(product.id === element.id))
    setCart(newCart)
  } */

  /*   const cleanCart = () => setCart([]) */

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, cleanCart, deleteProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}
