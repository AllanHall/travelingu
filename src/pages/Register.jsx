import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

export default function Register() {
  return (
    <>
      <div>
        <header className="title">
          <img className="logo" src={Logo} alt="travelingo logo" />
        </header>
        <div className="nav">
          <Link className="navLink" to="/">
            <div>Home</div>
          </Link>
        </div>
      </div>
      <div className="register">Register</div>
      <form className="form">
        <div>
          <input className="inputField" type="text" placeholder="first name" />
          <input className="inputField" type="text" placeholder="last name" />
        </div>
        <div>
          <input className="inputField" type="text" placeholder="location" />
          <input className="inputField" type="text" placeholder="address" />
        </div>
        <div>
          <input
            className="inputField"
            type="text"
            placeholder="language spoken"
          />
          <input className="inputField" type="text" placeholder="website URL" />
        </div>
        <textarea
          className="textArea"
          type="text"
          placeholder="location description"
        />
        <button>Submit</button>
      </form>
    </>
  )
}
