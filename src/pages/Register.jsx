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
          <Link className="navLink" to="/home">
            <div>Home</div>
          </Link>
          <Link className="navLink" to="/">
            <div>Login</div>
          </Link>
        </div>
      </div>
      <div className="register">Register</div>
      <form className="form">
        <div className="register-div">
          <input className="inputField" type="text" placeholder="first name" />
          <input className="inputField" type="text" placeholder="last name" />
        </div>
        <div className="register-div">
          <input className="inputField" type="text" placeholder="location" />
          <input className="inputField" type="text" placeholder="address" />
        </div>
        <div>
          <select className="select">
            <option value="1">English</option>
            <option value="2">Spanish</option>
            <option value="3">French</option>
            <option value="4">German</option>
            <option value="5">Chinese</option>
            <option value="6">Hindi</option>
            <option value="7">Arabic</option>
            <option value="8">Portuguese</option>
            <option value="9">Bengali</option>
            <option value="10">Russian</option>
            <option value="11">Japanese</option>
            <option value="12">Lahnda</option>
            <option value="13">Indonesian</option>
            <option value="14">Korean</option>
            <option value="15">Vietnamese</option>
            <option value="16">Turkish</option>
          </select>
        </div>
        <div>
          <input
            className="inputFieldWeb"
            type="text"
            placeholder="website URL"
          />
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
