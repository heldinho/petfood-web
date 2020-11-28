import React, { useEffect } from 'react'

import Header from '../../components/header'
import Product from '../../components/product/grid'
import SidebarCart from '../../components/sidebar/cart'

import ImgCompany from '../../assets/petlove.png'
import star from '../../assets/star.png'
import dolar from '../../assets/dolar.png'
import distancia from '../../assets/distancia.png'

export default function Petshop(props) {
  const { id } = props.match.params

  useEffect(() => {
    console.log(id)
  })

  function openSidebarPetshop() {
    const event = new CustomEvent('openSidebarPetshop')
    window.dispatchEvent(event)
  }

  return (
    <div className="h-100">
      <SidebarCart />
      <Header />
      <div className="container-fluid m-4">
        <div className="row">
          <div className="col-2 container-company">
            <div style={{ position: 'relative' }}>
              <img src={ImgCompany} className="img-fluid w-100" style={{ borderRadius: '5px' }} />
              <span
                className="info-store material-icons"
                onClick={() => openSidebarPetshop()}
              >
                store
              </span>
            </div>
            <div className="title-company d-flex justify-content-between">
              <strong>Petlove</strong>
              <div className="free-shipping">Frete Grátis</div>
            </div>
            <div className="info-company">
              <div className="mb-2 d-flex justify-content-between align-items-center">
                <div>
                  <img src={star} className="img-fluid mr-2" />
                  <strong className="mr-1">4,7</strong>
                  <span>(91)</span>
                </div>
                <div>
                  <img src={dolar} className="img-fluid mr-1" />
                  $$$
                </div>
              </div>
              <p>
                <img src={distancia} className="img-fluid mr-1" />
                0,3 km
              </p>
            </div>
          </div>
          {/* Produtos */}
          <div className="col-10">
            <div className="row mb-4">
              <div className="col-12 mb-2">
                <strong className="title-form-checkout">Produtos</strong>
              </div>
            </div>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Product key={item} isNew={true} isSales={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
