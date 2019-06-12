import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

class NavBar extends Component {
  render() {
    return (
      <>
        <header className="title">
          <img className="logo" src={Logo} />
        </header>
        <div className="nav">
          <Link className="navLink" to="/Register">
            <div>Register</div>
          </Link>
        </div>
      </>
    )
  }
}

export default NavBar
