import { useCart } from '../hooks/useCart'

const Cart = () => {
  const { cart, cleanCart, addToCart } = useCart()

  const handleRemove = () => {
    cleanCart()
  }

  return (
    <>
      <label className='cart-button' htmlFor='cart'>
        🔽
      </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='cart border rounded'>
        {cart.map((element) => (
          <ul className='list-unstyled' key={element.id}>
            <li className=''>
              <img src={element.image} alt={element.title} />
              <h5 className='text-center'>{element.title}</h5>
              <p className='text-center'>
                <small>${element.price}</small>
              </p>
              <footer className='text-center d-flex align-items-center gap-2 justify-content-center'>
                <small>Qty: {element.quantity}</small>
                <button
                  onClick={() => addToCart(element)}
                  className='btn btn-primary'
                >
                  +
                </button>
              </footer>
            </li>
          </ul>
        ))}
        <hr />
        <div className='d-flex justify-content-center'>
          <button onClick={handleRemove} className='btn btn-danger'>
            Delete
          </button>
        </div>
      </aside>
    </>
  )
}

export default Cart
