import React from 'react'
import ReactDOM from 'react-dom'

import './styles/global.css'

import Cadastro from './pages/cadastro'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'
import SidebarBag from './components/sidebar/bag'
import ModalCompany from './components/modal/company'
import ModalProduct from './components/modal/product'

ReactDOM.render(
  <React.StrictMode>
    <SidebarBag />
    <Petshop />
    <ModalCompany />
    <ModalProduct />
  </React.StrictMode>,
  document.getElementById('root')
)
