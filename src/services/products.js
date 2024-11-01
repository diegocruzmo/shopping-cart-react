export const fetchProducts = async () => {
  const url = 'https://dummyjson.com/products'
  //console.log('Produc Service')
  try {
    const res = await fetch(url)
    const data = await res.json()
    const products = data?.products

    const mappedProducts = products?.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      image: product.thumbnail
    }))

    return mappedProducts
  } catch (error) {
    console.log(error)
  }
}
