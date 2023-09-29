import React, { useContext } from 'react'

import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../CarritoContext/CarritoContext'

const Cart = () => {

    const {carrito, vaciarCarrito} = useContext(CarritoContext)

    const totalCantidad = carrito.reduce ((total, product) => total + product.cantidad, 0)  
    const total = carrito.reduce ((total, product) => total + (product.item.precio * product.cantidad), 0) 
    
    if(totalCantidad === 0){
        <>
        <h2>No hay productos cargados en el carrito!</h2>
        <Link to="/products">Productos</Link>
        </>
    }
 return (
    <div>
        {carrito.map(product => <CartItem key={product.id} {...product}/>)}
        <h3>TOTAL: ${total}</h3>
        <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
 )
}

export default Cart