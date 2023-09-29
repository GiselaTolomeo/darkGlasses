import React from 'react'
const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h4>{item.nombre}</h4>
        <h5>Cantidad: {cantidad}</h5>
        <h5>Precio: ${item.precio}</h5>
        <button>Eliminar</button>
    </div>
  )
}

export default CartItem