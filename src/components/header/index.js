import React from 'react'

import LogoWhite from '../../assets/logo-white.png'
import Logo from '../../assets/logo.png'

import './style.css'

export default function Header({ whiteVersion }) {

  function fnBag(e) {
    if (e.altKey) {
      alert('clicked with altKey')
    }
    console.log(e)
  }

  return (
    <div className="row mb-5">
      <div className="col-12 py-0">
        <header className={!whiteVersion ? 'p-4 text-center no-white-version' : 'p-4 text-center'}>
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
          <span className="material-icons navbar-icon-bag" onClick={(e) => fnBag(e)}>shopping_bag</span>
        </header>
      </div>
    </div>
  )
}
