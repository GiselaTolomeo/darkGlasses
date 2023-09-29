import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'
import "./Form.css"

const Form = (props) => {
  return (
<form>
    <Input label="Nombre"/> <br /> <br />
    <Input label="Apellido"/> <br /> <br />
    <TextArea label="Dejanos tu comentario"/> <br /> <br />
    <Button btn="enviar"/>
</form>
  )
}

export default Form