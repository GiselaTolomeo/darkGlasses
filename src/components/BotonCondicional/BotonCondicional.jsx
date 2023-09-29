import React, { useState } from 'react'

const BotonCondicional = () => {

const [verificado, setVerificado] = useState(false);

const [usuario, setUsuario] = useState("")
const [pass, setPass] = useState("")

const habilitar = (e) => {
    e.preventDefault()
    if ((pass === "tolomeo") || (usuario === "gisela")){
        setVerificado(true)
    }else { 
        setPass("Password Error")
        setUsuario("Usuario Error")
    }
    
}

const deshabilitar = () => {
    setVerificado(false)
}

const guardarpass = (e) => {
setPass(e.target.value)
}

const guardarusuario = (e) => {
setUsuario(e.target.value)
}

  return (
    <>
    {verificado ? (<><h2>Bienvenido al Circulo VIP de Dark Glasses</h2><h3>Conozca todos los descuentos y ofertas exclusivas a las que puede acceder por ser miembro premium de nuestro Circulo</h3><button onClick={deshabilitar}>Cerrar Sesión</button></>) : (
    
    <form onSubmit={habilitar}>
    <label htmlFor="usuario">Usuario</label>
    <input onChange={guardarusuario} type="text" id="usuario" value={usuario}/>
    <label htmlFor="pass">Password</label>
    <input onChange={guardarpass} type="text" id="pass" value={pass}/>
    <button>Iniciar Sesion</button>
    </form>)}
    </>
  )
}

export default BotonCondicional