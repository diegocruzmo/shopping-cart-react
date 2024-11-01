import { useFilters } from '../hooks/useFilters'

const Filters = () => {
  //console.log('Filters')
  const { filters, changeFiltersPrice, changeFiltersCategory } = useFilters()

  const handleChangePrice = (e) => {
    changeFiltersPrice(e.target.value)
  }

  const handleChangeCategory = (e) => {
    changeFiltersCategory(e.target.value)
  }

  return (
    <>
      <section className='container container-fluid d-flex justify-content-between mb-4'>
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <label htmlFor='price' className='form-label'>
            Price
          </label>
          <input
            type='range'
            className='form-range'
            name=''
            id='price'
            min='0'
            max='2500'
            onChange={handleChangePrice}
          />
          <span>{filters.minPrice}</span>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            className='form-select'
            name=''
            id='category'
            onChange={handleChangeCategory}
          >
            <option value='all'>All</option>
            <option value='beauty'>Beauty</option>
            <option value='fragrances'>Fragrances</option>
            <option value='furniture'>Furniture</option>
            <option value='groceries'>Groceries</option>
          </select>
        </div>
      </section>
    </>
  )
}

export default Filters
