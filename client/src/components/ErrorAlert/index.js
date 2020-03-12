import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export class ErrorAlert extends Component {

  constructor(props) {
    super(props)

    this.state = {
      show: true,
    }
  }

  closeModal = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const { description } = this.props
    const { show } = this.state

    return (
      <>
        {show ?
          <Alert variant='danger' onClose={this.closeModal} dismissible>
            <Alert.Heading>Something goes wrong</Alert.Heading>
            <p>
              {description}
            </p>
          </Alert>
          : null
        }
      </>
    )
  }
}