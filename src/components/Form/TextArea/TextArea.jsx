import React from 'react'

const TextArea = (props) => {
  return (
    <textarea cols="30" rows="10">{props.label}</textarea>
  )
}

export default TextArea