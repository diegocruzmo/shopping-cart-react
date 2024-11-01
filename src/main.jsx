import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'
import App from './App.jsx'
import { FiltersProvider } from './context/FiltersProvider.jsx'
import { ProductsProvider } from './context/ProductsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ProductsProvider>
)
