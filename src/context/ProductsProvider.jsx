import { ProductsContext } from './ProductsContext'
import { useState, useEffect } from 'react'
import { fetchProducts } from '../services/products'

export const ProductsProvider = ({ children }) => {
  //console.log('ProductsProvider')
  const [responseProducts, setResponseProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    setLoading(true)
    const data = await fetchProducts()
    setResponseProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    //console.log('getProducts')
    getProducts()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        responseProducts,
        loading
        //getProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
