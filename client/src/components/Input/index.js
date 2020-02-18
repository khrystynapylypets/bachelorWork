import React from 'react'
import { Form } from 'react-bootstrap'

export const Input = ({ input, type, placeholder }) => {
  return (
    <Form.Control
      {...input}
      type={type}
      placeholder={placeholder}
    />
  )
}
