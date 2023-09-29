

import React, { useEffect } from 'react';
import { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({inicial, stock, agregarAlCarrito}) => {

    const [contador, setContador] = useState (inicial)
    const [color, setColor] = useState ("white")

    useEffect(()=>{
        if((stock - contador) <3){
            setColor("red")
        }else{
            setColor("white")
        }
    },[contador])

    const incrementar = () => {
        if (contador < stock){
            setContador(contador+1)
        }else{alert("Lo siento, no contamos con esa cantidad de stock!")}
        
    }
    const decrementar = () => {
        if (contador > inicial){
            setContador(contador-1)
        }
    }

    // const agregarAlCarrito = () =>{
    //     alert(`Agregaste ${contador} items al carrito!`)
    //   }

      

  return (
    <div className='counter'>
        <button className='btn-compra' onClick={decrementar}>-</button>
        <p className='amount' style={{color:color}} >{contador}</p>
        <button className='btn-compra' onClick={incrementar}>+</button>
        <button className='btn-compra' onClick={()=> agregarAlCarrito(contador)}>Agregar</button>
    </div>
  )
}

export default ItemCount