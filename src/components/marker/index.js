import React from 'react'

import './style.css'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'
import logo from '../../assets/petlove.png'

export default function marker() {
  return (
    <div>
      <img src={MarkerIcon} />
      <img className="img-marker" src={logo} />
    </div>
  )
}
