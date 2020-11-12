import React from 'react'

import ImgProduct from '../../../assets/Image.png'
import star from '../../../assets/star.png'

export default function ProductList() {
  return (
    <div className="box-grid-product">
      <div className="box-grid-product-img">
        <img src={ImgProduct} />
        <button className="btn-add-product">
          <span>+</span>
        </button>
        <span className="product-sales badge badge-danger">-30% Off</span>
      </div>
      <div>
        <div className="d-flex justify-content-between mt-3 mb-2">
          <div>
            <img src={star} className="img-fluid mr-2" />
            <strong className="mr-1">4,3</strong>
            <span>(103)</span>
          </div>
          <div className="amount">R$4,90</div>
        </div>
        <div>
          <strong>
            Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg
          </strong>
        </div>
      </div>
    </div>
  )
}
