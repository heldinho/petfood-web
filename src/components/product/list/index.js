import React, { useState } from 'react'

import ImgProduct from '../../../assets/product.png'
import ContextMenu from '../../context-menu'

export default function ProductList() {
  return (
    <div className="box-product">
      <img src={ImgProduct} className="img-fluid" />
      <div className="d-flex flex-column">
        <div className="amount">R$4,90</div>
        <strong className="product-description-bag">
          Ração Úmida Nestlé Purina Dog Chow Extra Life Sachê Carne para Cães
          Filhotes - 100 g
        </strong>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="product-remove-bag">
          <span>&times;</span>
        </button>
      </div>
    </div>
  )
}
