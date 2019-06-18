import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="navBar">
          <header className="title">
            <img className="logo" src={Logo} alt="travelingo logo" />
          </header>
          <div className="nav">
            <Link className="navLink" to="/Register">
              <div>Register</div>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar
