import NavBar from '../components/NavBar'
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as mockData from '../data/mockData.json'
import pin from '../images/pin.png'

const TOKEN =
  'pk.eyJ1IjoiYWxsYW1hbGxhbiIsImEiOiJjang2YTJ5ZDkwYWl6NDNtaHF1bmpvbmVyIn0.5LxH6in5O4Et8agx-t57Rw'

export default function Home() {
  const [selectedSite, setSelectedSite] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 27.76,
    longitude: -82.64,
    width: '70vw',
    height: '70vh',
    zoom: 11
  })
  return (
    <>
      <NavBar />
      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/allamallan/cjx6aopuo3nzi1cqoy74266u6"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
        >
          {mockData.features.map(site => (
            <Marker
              key={site.properties.Location_Id}
              latitude={site.geometry.coordinates[0]}
              longitude={site.geometry.coordinates[1]}
            >
              <button
                className="markerBtn"
                onClick={e => {
                  e.preventDefault()
                  setSelectedSite(site)
                }}
              >
                <img src={pin} alt="map marker" />
              </button>
            </Marker>
          ))}
          {selectedSite ? (
            <Popup
              latitude={selectedSite.geometry.coordinates[0]}
              longitude={selectedSite.geometry.coordinates[1]}
              onClose={() => {
                setSelectedSite(null)
              }}
            >
              <div>
                <h3>{selectedSite.properties.Name}</h3>
                <p>{selectedSite.properties.Description}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
      <ul className="list">
        <li>
          <h2>Business 1</h2>
          <h2>Name of person</h2>
          <p>Language</p>
          <p>Address</p>
          <p>description</p>
          <p>website</p>
        </li>
        <li>
          <h2>Business 2</h2>
          <h2>Name of person</h2>
          <p>Language</p>
          <p>Address</p>
          <p>description</p>
          <p>website</p>
        </li>
      </ul>
    </>
  )
}
