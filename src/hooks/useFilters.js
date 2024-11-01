import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'
import { useProducts } from './useProducts'

export const useFilters = () => {
  //console.log('useFilters')
  const { responseProducts } = useProducts()
  const { filters, changeFiltersPrice, changeFiltersCategory } =
    useContext(FiltersContext)

  const filterProducts = () => {
    //console.log('filterProducts()')
    return responseProducts.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    )
  }

  const productsFiltered = filterProducts()

  return {
    productsFiltered,
    changeFiltersPrice,
    changeFiltersCategory,
    filters
  }
}
