import React from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductoInfo from '../ProductInfo/ProductoInfo'
import "./ProductCard.css"
import ItemCount from '../../Counter/ItemCount/ItemCount'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
        <ProductImage/>
        <ProductoInfo/>
        <ItemCount stock = {10}/>
    </div>
  )
}

export default ProductCard