import React, { useContext, useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../../Counter/ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../../CarritoContext/CarritoContext';


const ItemDetail = ({id, nombre, precio, imagen, stock}) => {

const [agregarCantidad, setAgregarCantidad] = useState(0);

const {agregarProducto} = useContext(CarritoContext)

const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad)

  const item = {id, nombre, precio}
  agregarProducto(item,cantidad)
}

  return (
    <div className='container-item'>
        <h2>Producto: {nombre}</h2>
        <h3>Modelo: 39{id}</h3>
        <img className="img-detail" src={imagen} alt="imagen del producto, lentes de sol" />
        <h4>Lentes de sol marca RayBan, Carrera, Versace, de pasra y acrilico. Cristal antiquiebre, translúcido con o sin color.</h4>
        <h4>Cualquiera de nuestros modelos pueden ser solicitados con o sin aumento, bajo receta medica, o bien ser calculado con nuestros especialistas de contactología</h4>
        <h4 className='price'>${precio}.-</h4>

        <ItemCount inicial={1} stock={stock} agregarAlCarrito={manejadorCantidad}/>
        {
          agregarCantidad > 0 ? (<Link to="/cart">Ver Carrito</Link>) : ("")
        }
    </div>
  )
}

export default ItemDetail