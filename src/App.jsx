import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import { useProducts } from './hooks/useProducts'
import { useFilters } from './hooks/useFilters'

function App() {
  const { loading } = useProducts()
  const { productsFiltered } = useFilters()
  //console.log('render')
  return (
    <>
      <Header />
      <main className='container container-fluid'>
        {loading ? <p>Loading...</p> : <Products />}
      </main>
      <Footer />
    </>
  )
}

export default App
