import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <>
        <header className="title">Travelingo</header>
        <div className="nav">
          <Link className="navLink" to="/">
            <div>Home</div>
          </Link>
          <Link className="navLink" to="/Register">
            <div>Register</div>
          </Link>
        </div>
      </>
    )
  }
}

export default NavBar
