import React from 'react'

import Header from '../../components/header'
import Product from '../../components/product/list'

export default function Checkout() {

  const products = [

  ]

  return (
    <div className="h-100">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            {/* Dados de entrega */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="row mb-3">
                  <div className="col-12 pl-1">
                    <strong className="title-form-checkout">
                      Dados de Entrega
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 p-1">
                    <input
                      type="text"
                      placeholder="CEP"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-9 p-1">
                    <input
                      type="text"
                      placeholder="Cidade"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-3 p-1">
                    <input
                      type="text"
                      placeholder="UF"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-9 p-1">
                    <input
                      type="text"
                      placeholder="Logradouro"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-3 p-1">
                    <input
                      type="text"
                      placeholder="Número"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 p-1">
                    <input
                      type="text"
                      placeholder="Bairro"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-6 p-1">
                    <input
                      type="text"
                      placeholder="Complemento"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dados de pagamento */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="row mb-3">
                  <div className="col-12 pl-1">
                    <strong className="title-form-checkout">
                      Dados de Pagamento
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 p-1">
                    <input
                      type="text"
                      placeholder="Número do Cartão"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 p-1">
                    <input
                      type="text"
                      placeholder="Validade"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-6 p-1">
                    <input
                      type="text"
                      placeholder="CVV"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 p-1">
                    <input
                      type="text"
                      placeholder="Nome do Títular"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="col-6 p-1">
                    <input
                      type="text"
                      placeholder="CPF / CNPJ do Títular"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botão finalizar */}
            <div className="row mb-5">
              <div className="col-12 p-1">
                <div className="row mb-3">
                  <div className="col-12 d-flex justify-content-between">
                    <strong>Total:</strong>
                    <strong className="amount-total">R$ 79,90</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="btn btn-lg btn-block btn-primary font-weight-bold">
                      Finalizar Compra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box minha sacola */}
          <div className="col-6">
            <div className="row">
              <div className="col-12 container-bag">
                <div className="box-bag">
                  <div className="row">
                    <div className="col-12 p-1 mb-3">
                      <strong className="label-count-bag">
                        Minha Sacola ({[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length})
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Product key={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
