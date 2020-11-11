import React from 'react'

import ImgProduct from '../../../assets/product.png'

export default function ProductList() {
  React.useEffect(() => {
    console.log('useEffect')
  }, [])

  return (
    <div className="box-product">
      <img src={ImgProduct} />
      <div className="d-flex flex-column">
        <div className="amount">$4,90</div>
        <strong className="product-description-bag">
          Ração Úmida Nestlé Purina Dog Chow Extra Life Sachê Carne para Cães
          Filhotes - 100 g
        </strong>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="product-remove-bag">
          <span>&times;</span>
        </button>
      </div>
    </div>
  )
}
