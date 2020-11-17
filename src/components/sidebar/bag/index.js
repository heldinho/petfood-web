import React from 'react'

import Product from '../../product/list'

import './style.css'

export default function Bag() {
  const [open, setOpen] = React.useState(true)

  return (
    <div className={open ? 'container-bag show-header-cart' : 'container-bag'}>
      <div className="header-cart">
        <div className="header-bag">
          <div className="total-count-product">Minha Sacola (4)</div>
          <span
            class="material-icons close-icon-bag"
            onClick={() => setOpen(false)}
          >
            close
          </span>
        </div>
        <div className="list-products-bag">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <Product />)
          }
        </div>
        <div className="amount-bag">
          <span>
            <strong>Total</strong>
          </span>
          <span>
            <strong>R$100,00</strong>
          </span>
        </div>
        <div className="btn-checkout-bag">
          <strong>Finalizar Compra</strong>
        </div>
      </div>
    </div>
  )
}
