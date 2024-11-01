import { useFilters } from '../hooks/useFilters'

const Footer = () => {
  //console.log('Footer')
  const { filters } = useFilters()

  return (
    <footer className='container container-fluid'>
      <h4>Footer</h4>
      {JSON.stringify(filters)}
    </footer>
  )
}

export default Footer
