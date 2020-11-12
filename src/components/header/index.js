import React from 'react'

import LogoWhite from '../../assets/logo-white.png'
import Logo from '../../assets/logo.png'

import './style.css'

const Header = ({ whiteVersion }) => {
  return (
    <div className="row mb-5">
      <div className="col-12 py-0">
        <header className={!whiteVersion ? 'p-4 text-center no-white-version' : 'p-4 text-center'}>
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
        </header>
      </div>
    </div>
  )
}

export default Header
