import { useFilters } from '../hooks/useFilters'

const ProductsList = ({ products }) => {
  return (
    <>
      <ul className='products list-unstyled'>
        {products.map((product) => (
          <li
            className='border rounded movie d-flex flex-column justify-content-center align-items-center p-1'
            key={product.id}
          >
            <img className='mb-2' src={product.image} alt={product.title} />
            <h5 className='text-center'>{product.title}</h5>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <button className='btn btn-secondary mb-3'>Buy</button>
          </li>
        ))}
      </ul>
    </>
  )
}

const NoProducts = () => {
  return <p>No results...</p>
}

const Products = () => {
  //console.log('Products')
  const { productsFiltered } = useFilters()
  const hasProducts = productsFiltered?.length > 0

  return hasProducts ? (
    <ProductsList products={productsFiltered} />
  ) : (
    <NoProducts />
  )
}

export default Products
