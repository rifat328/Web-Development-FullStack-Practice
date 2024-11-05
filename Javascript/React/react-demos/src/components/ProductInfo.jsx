import React from 'react'

const Product={
    name:'Laptop',
    price:'$1500',
    availability:'In Stock'
}
const ProductInfo = () => {
  return (
    <div>
        <h3>Name: {Product.name}</h3>
        <h3>Price: {Product.price}</h3>
        <h3>Availability: {Product.availability}</h3>
    </div>
  )
}

export default ProductInfo;