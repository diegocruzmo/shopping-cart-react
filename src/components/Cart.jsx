const Cart = () => {
  return (
    <>
      <label className='cart-button' htmlFor='cart'>
        🔽
      </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='./src/assets/thumbnail.png' alt='title' />
            <p>name</p>
            <p>price</p>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>Delete</button>
      </aside>
    </>
  )
}

export default Cart
