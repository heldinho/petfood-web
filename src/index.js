import React from 'react'
import ReactDOM from 'react-dom'

import './styles/global.css'

import Cadastro from './pages/cadastro'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'
import Home from './pages/home'
import SidebarPetshop from './components/sidebar/petshop'
import SidebarProduct from './components/sidebar/product'

ReactDOM.render(
  <React.StrictMode>
    <SidebarPetshop />
    <SidebarProduct />
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
)
