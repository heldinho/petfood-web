import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LogoWhite from '../../assets/logo-white.png'
import Logo from '../../assets/logo.png'

import './style.css'

export default function Header({ whiteVersion, hideCart }) {
  const [cartCount, setCartCount] = useState(0)
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() => {
    window.addEventListener('cartCount', () => {
      setCartCount(cartCount + 1)
    })
  }, [cartCount])

  function fnBag(e) {
    const event = new CustomEvent('openCart')
    window.dispatchEvent(event)
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll())
    return () => window.removeEventListener('scroll', handleScroll())
  }, [document.scrollY])

  return (
    <div id="header" className={scrollY > 20 ? 'row active' : 'row'}>
      <div className="col-12 p-0">
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
