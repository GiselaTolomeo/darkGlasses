import React, { useState } from 'react'
import "./Mensaje.css"

const Mensaje = () => {

    const [mensaje, setMensaje] = useState(false);

    const handler = () => {
        setMensaje(!mensaje)
    }


  return (
    <>
    <button className='btn-mensaje' onClick={handler}>{mensaje ? "Cerrar" : "+Info" }</button>
    {mensaje && <p>Todos los productos tienen cambio por un plazo de 30 dias corridos contando desde el dia de la entrega. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat incidunt ducimus quis excepturi tenetur eveniet placeat doloremque similique commodi perferendis accusantium vero dolor, impedit, eligendi temporibus aspernatur? Atque, corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente asperiores veniam quidem distinctio excepturi quae in iure earum tempore et, aperiam eius culpa saepe, corrupti maiores facilis. Debitis, porro laudantium. Para mas información consulte las bases y condiciones.</p>}
    </>
  )
}

export default Mensaje