import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/global.css'
import SidebarPetshop from './components/sidebar/petshop'
import SidebarProduct from './components/sidebar/product'

import Cadastro from './pages/cadastro'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'
import Home from './pages/home'


const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/petshop/:id" component={Petshop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cadastro" component={Cadastro} />
      </Router>
      <SidebarPetshop />
      <SidebarProduct />
    </>
  )
}

export default Routes
