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
          <select className="select">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
          </select>
          <input className="inputField" type="text" placeholder="website URL" />
        </div>
        <textarea
          className="textArea"
          type="text"
          placeholder="location description"
        />
        <div className="div">
          <button className="updateButton">Submit</button>
        </div>
      </form>
      <div className="div">
        <button className="updateButton">Update Your Information</button>
      </div>
    </>
  )
}
