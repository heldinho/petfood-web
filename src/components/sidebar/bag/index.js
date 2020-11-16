import React from 'react'

import Product from '../../product/list'

import './style.css'

export default function Bag() {
  return (
    <div className="container-bag">
      <div className="header-bag">
        <p>Minha Sacola (4)</p>
      </div>
      <div className="list-products-bag">
        <Product />
      </div>
      <div className="amount-bag"></div>
      <div className="btn-checkout-bag"></div>
    </div>
  )
}
