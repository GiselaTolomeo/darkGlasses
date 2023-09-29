import React, { useState } from 'react'

const Formulario = () => {

const [name, setName] = useState("");
const [surname, setSurname] = useState("");

console.log(name, surname)

const handlerSubmit = (event) => {
    event.preventDefault()
    
    setName("")
    setSurname("")
}

  return (
    <form onSubmit={handlerSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={(e)=> setName(e.target.value)} value={name}/>
        <label htmlFor="surname">Surname</label>
        <input type="text" id='surname' onChange={(e)=> setSurname(e.target.value)} value={surname}/>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Formulario