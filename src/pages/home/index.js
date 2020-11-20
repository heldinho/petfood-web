import React from 'react'

import './style.css'

import Header from '../../components/header'
import SidebarBag from '../../components/sidebar/bag'
import Petshop from '../../components/petshop'
import Map from '../../components/map'

export default function Home() {
  return (
    <div className="h-100">
      <SidebarBag />
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list d-flex justify-content-start align-items-center" style={{ overflow: 'scroll hidden'}}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <Petshop key={item} />)
          }
        </ul>
      </div>
      <Map />
    </div>
  )
}
