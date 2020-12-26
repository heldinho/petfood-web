import React from 'react'
import { useDispatch } from 'react-redux'
import { requestPetshops } from '../../store/modules/shop/actions'

import './style.css'

import Header from '../../components/header'
import SidebarCart from '../../components/sidebar/cart'
import Petshop from '../../components/petshop'
import Map from '../../components/map'

export default function Home() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(requestPetshops())
  }, [])

  return (
    <div className="h-100">
      <SidebarCart />
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>
        <ul
          className="col-12 petshop-list d-flex justify-content-start align-items-center"
          style={{ overflow: 'scroll hidden' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Petshop key={item} />
          ))}
        </ul>
      </div>
      <Map />
    </div>
  )
}
