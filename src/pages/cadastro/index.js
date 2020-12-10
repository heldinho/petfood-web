import React from 'react'
import { useDispatch } from 'react-redux'
import { setCustomer as setStoreCustomer } from '../../store/modules/shop/actions'

import Header from '../../components/header'
import Illustration from '../../assets/illustration.png'

const Cadastro = () => {
  const dispatch = useDispatch()
  const [customer, setCustomer] = React.useState({
    external_id: new Date().getTime().toString(),
    name: '',
    type: 'individual',
    country: 'br',
    email: '',
    documents: [
      {
        type: 'cpf',
        number: ''
      }
    ],
    phone_numbers: [''],
    birthday: ''
  })

  const handleCustomer = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    switch (name) {
      case 'cpf':
        setCustomer({
          ...customer,
          documents: [
            {
              type: name,
              number: value
            }
          ]
        })
        break
      case 'phone_numbers':
        setCustomer({
          ...customer,
          [name]: [value]
        })
        break
      default:
        setCustomer({
          ...customer,
          [name]: value
        })
    }
  }

  const goToCheckout = (e) => {
    dispatch(setStoreCustomer(customer))
  }

  return (
    <div className="container-fluid bg-primary" style={{ height: '100%' }}>
      <Header whiteVersion hideCart />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box">
            <h2 className="text-center">
              Falta pouco pra fazer o seu pet feliz.
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo"
              name="name"
              onChange={handleCustomer}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-Mail"
              name="email"
              onChange={handleCustomer}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              name="phone_numbers"
              onChange={handleCustomer}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
              name="cpf"
              onChange={handleCustomer}
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
              name="birthday"
              onChange={handleCustomer}
            />

            <button
              onClick={goToCheckout}
              className="btn btn-lg btn-block btn-secondary"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
