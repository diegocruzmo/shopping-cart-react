import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { useProducts } from './hooks/useProducts'

function App() {
  const { loading } = useProducts()
  //console.log('render')
  return (
    <>
      <Header />
      <Cart />
      <main className='container container-fluid'>
        {loading ? <p>Loading...</p> : <Products />}
      </main>
      <Footer />
    </>
  )
}

export default App
