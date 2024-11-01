import { useContext, useEffect } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProducts = () => {
  //console.log('useProducts')
  const { responseProducts, loading } = useContext(ProductsContext)

  return { responseProducts, loading }
}
