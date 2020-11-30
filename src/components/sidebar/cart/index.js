import React from 'react'
import { Link } from 'react-router-dom'

import Product from '../../product/list'

import './style.css'

export default function Bag() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpen(true)
    })
  }, [])

  return (
    <div className={open ? 'container-bag show-header-cart' : 'container-bag'}>
      <div className="header-cart">
        <div className="header-bag">
          <div className="total-count-product">Minha Sacola (4)</div>
          <span
            className="material-icons close-icon-bag"
            onClick={() => setOpen(false)}
          >
            close
          </span>
        </div>
        <div className="list-products-bag">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Product key={item} />
          ))}
        </div>
        <div className="amount-bag">
          <span>
            <strong>Total</strong>
          </span>
          <span className="cart-subtotal">R$100,00</span>
        </div>
        <div className="cart-footer">
          <div className="btn-clear-bag">
            <strong>Limpar Sacola</strong>
          </div>
          <Link to="/checkout" className="btn-checkout-bag">
            <div>
              <strong>Finalizar Compra</strong>
            </div>
          </Link>
        </div>
        {/* <div className="btn-open-sidebar-bag" onClick={() => setOpen(!open)}>
          <span className="material-icons">shopping_bag</span>
        </div> */}
      </div>
    </div>
  )
}
