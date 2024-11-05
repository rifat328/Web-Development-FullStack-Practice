import React from 'react'

const Product=[
    {id:1, name:' MackBook M4 Pro Ultra ',price:'$1500',availability:'In Stock'},
    {id:2, name:' Dell XPS 15"',price:'$1500',availability:'In Stock'},
    {id:3, name:'Asus Rog Stricx G15 Core i5 4090ti ',price:'$1100',availability:'In Stock'}
];
const ProductInfo = () => {
return (
  <div style={{display:'flex', flexWrap:'wrap',  gap:'2rem'}}>
    {Product.map(({id, name, availability, price})=>(
      <div key={id}>
        <h3 style={{fontSize:'2.5rem',flexBasis:'1rem'}}>{name}</h3>
        <h3 style={{color:'green',flexBasis:'1rem'}}>Status: {availability}</h3>
        <h3 style={{color:'green',flexBasis:'1rem'}}>Price: {price}</h3>
        <br/>
      </div>
    ))}
  </div>
)
}

export default ProductInfo;