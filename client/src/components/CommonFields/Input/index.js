import React from 'react'
import { Form } from 'react-bootstrap'

export const Input = ({ input, type, placeholder, meta: { touched, error } }) => {
  return (
    <>
      <Form.Control
        {...input}
        type={type}
        placeholder={placeholder}
      />
      {touched
      && ((error && <span className='error-field'>{error}</span>))}
    </>
  )
}
