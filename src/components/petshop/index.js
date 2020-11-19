import React from 'react'

import './style.css'

import ImgCompany from '../../assets/petlove.png'
import star from '../../assets/star.png'
import dolar from '../../assets/dolar.png'
import distancia from '../../assets/distancia.png'

export default function Petshop() {
  return (
    <li className="petshop d-inline-block mr-4 my-4">
      <div className="d-flex">
        <div className="box-image d-inline-block mr-3">
          <img src={ImgCompany} className="img-fluid w-100" />
          <span
            className="info-store material-icons"
            data-toggle="modal"
            data-target="#modal-company"
          >
            store
          </span>
        </div>
        <div className="d-inline-block">
          <div className="title-company">
            <strong>Petlove</strong>
          </div>
          <div className="info-company">
            <div className="mb-2 d-flex">
              <div className="mr-3">
                <img src={star} className="img-fluid mr-2" />
                <strong className="mr-1">4,7</strong>
                <span>(91)</span>
              </div>
              <div className="mr-3">
                <img src={dolar} className="img-fluid mr-1" />
                $$$
              </div>
              <div className="mr-3">
                <img src={distancia} className="img-fluid mr-1" />
                0,3 km
              </div>
            </div>
            <div className="free-shipping">Frete Grátis</div>
          </div>
        </div>
      </div>
    </li>
  )
}
