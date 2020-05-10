import React, { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export class Password extends Component {
  state = {
    showPassword: false,
  }

  handleChangePasswordState = () => (
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }))
  )

  render() {
    const { input, type, placeholder, meta: { touched, error } } = this.props;
    const { showPassword } = this.state;

    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text
            onClick={this.handleChangePasswordState}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          {...input}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
        />
        {touched
        && ((error && <span className='error-field'>{error}</span>))}
      </InputGroup>
    );
  }
}
