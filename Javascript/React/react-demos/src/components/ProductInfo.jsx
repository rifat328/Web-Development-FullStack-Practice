import React from 'react'

const Product={
    name:'Laptop',
    price:'$1200',
    availability:'In Stock'
}
const ProductInfo = () => {
  return (
    <div>
        <h3>{Product.name}</h3>
        <h3>{Product.price}</h3>
        <h3>{Product.availability}</h3>
    </div>
  )
}

export default ProductInfo;