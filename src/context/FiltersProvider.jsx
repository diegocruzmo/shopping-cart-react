import { FiltersContext } from './FiltersContext'
import { useState } from 'react'

export const FiltersProvider = ({ children }) => {
  //console.log('FiltersProvider')
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const changeFiltersPrice = (price) => {
    setFilters((previous) => ({
      ...previous,
      minPrice: price
    }))
  }

  const changeFiltersCategory = (category) => {
    setFilters((previous) => ({
      ...previous,
      category: category
    }))
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        changeFiltersPrice,
        changeFiltersCategory
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
