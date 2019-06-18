import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="map" />
      <ul className="list">
        <li>
          <h2>Business 1</h2>
          <h2>Name of person</h2>
          <p>Language Spoken</p>
          <p>Address</p>
          <p>website</p>
        </li>
        <li>
          <h2>Business 2</h2>
          <h2>Name of person</h2>
          <p>Language Spoken</p>
          <p>Address</p>
          <p>website</p>
        </li>
      </ul>
    </>
  )
}
