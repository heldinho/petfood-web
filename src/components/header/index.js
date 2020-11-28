import React from 'react'
import { Link } from 'react-router-dom'

import LogoWhite from '../../assets/logo-white.png'
import Logo from '../../assets/logo.png'

import './style.css'

export default function Header({ whiteVersion, hideCart }) {
  const [cartCount, setCartCount] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('cartCount', () => {
      setCartCount(cartCount + 1)
    })
  }, [cartCount])

  function fnBag(e) {
    // if (e.altKey) {}
    const event = new CustomEvent('openCart')
    window.dispatchEvent(event)
  }

  return (
    <div className="row">
      <div className="col-12 py-0">
        <header
          className={
            !whiteVersion
              ? 'p-4 text-center no-white-version'
              : 'p-4 text-center'
          }
        >
          <Link to="/">
            <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
          </Link>
          {!hideCart ? (
            <div className="box-icon-bttn-bag">
              <span
                className="material-icons navbar-icon-bag"
                onClick={(e) => fnBag(e)}
              >
                shopping_bag
              </span>
              <span className="badge badge-primary badge-bag-count">
                {cartCount ? cartCount : ''}
              </span>
            </div>
          ) : (
            false
          )}
        </header>
      </div>
    </div>
  )
}
