import React from 'react'
import LogOut from '../../containers/LogOutContainer'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    Home page
    <LogOut />
    <Link to='/profile'>Profile</Link>
  </div>
)