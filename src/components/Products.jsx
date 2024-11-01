import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

const ProductsList = ({ products }) => {
  const { addToCart, cart, deleteProduct } = useCart()

  const checkProductInCar = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  const handleClick = (product) => {
    addToCart(product)
  }

  const handleRemove = (product) => {
    deleteProduct(product)
  }

  return (
    <>
      <ul className='products list-unstyled'>
        {products.map((product) => {
          const isProductInCart = checkProductInCar(product)
          return (
            <li
              className='border rounded movie d-flex flex-column justify-content-center align-items-center p-1'
              key={product.id}
            >
              <img className='mb-2' src={product.image} alt={product.title} />
              <h5 className='text-center'>{product.title}</h5>
              <p>{product.category}</p>
              <p>{product.price}</p>
              {isProductInCart ? (
                <button
                  onClick={() => handleRemove(product)}
                  className='btn btn-danger mb-3'
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => handleClick(product)}
                  className='btn btn-secondary mb-3'
                >
                  Buy
                </button>
              )}
            </li>
          )
        })}
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
