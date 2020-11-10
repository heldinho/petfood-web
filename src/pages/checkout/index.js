import React from 'react'

import Header from '../../components/header'

export default function checkout() {
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
                    <span class="title-form-checkout">Dados de Entrega</span>
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
                    <span className="title-form-checkout">
                      Dados de Pagamento
                    </span>
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
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <span>Total:</span>
                    <span>R$ 79,90</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button className="btn btn-lg btn-block btn-primary">
                      Finalizar Compra
                    </button>
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
