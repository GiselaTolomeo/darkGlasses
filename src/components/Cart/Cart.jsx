import React, { useContext } from 'react'
import "./Cart.css"
import { CarritoContext } from '../../CarritoContext/CarritoContext'
import { Link } from 'react-router-dom'

const Cart = () => {

const {carrito} = useContext(CarritoContext)

const cart = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
const totalCantidad = carrito.reduce((total, product) => total + product.cantidad, 0)

return (
    <Link to="/cart" >
       <img src={cart} alt="carrito de compras" /> 
       {
        totalCantidad
       }
   </Link> 
  )
}

export default Cart
