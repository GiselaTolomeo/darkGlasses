import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div className='card-product'>
        <h3 className='product-title'>{nombre}</h3>
        <img className='img-product' src={imagen} alt={nombre} />
        <h3 className='model'>Modelo: 39{id}</h3>
        <h4>${precio}.-</h4>
        <Link to={`/item/${id}`} className='btn-product'>Ver detalle</Link>
        
    </div>
  )
}

export default Item