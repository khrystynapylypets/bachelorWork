import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions'
import { Button } from 'react-bootstrap'
import { IoIosLogOut } from 'react-icons/io'


class LogOutContainer extends Component {

  handleLogout = () => {
    const {logoutUser} = this.props

    logoutUser()
  }

  render() {
    return (
        <Button variant='primary' onClick={this.handleLogout}>
          Вийти <IoIosLogOut/>
        </Button>
    )
  }
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(
    null,
    mapDispatchToProps,
)(LogOutContainer)
