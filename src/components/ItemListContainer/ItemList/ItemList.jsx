import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className='container-products'>
        {products.map (product => <Item key={product.id} {...product}/>)}
    </div>
  )
}

export default ItemList