import React from 'react'

import ImgProduct from '../../../assets/Image.png'
import star from '../../../assets/star.png'

export default function ProductList() {
  const [slideIndex, setSlideIndex] = React.useState(0)

  function nextSlide() {
    setSlideIndex(slideIndex++)
  }

  function prevSlide() {
    setSlideIndex(slideIndex--)
  }

  function showSlide() {
    const slides = document.getElementsByClassName('mySlides')
    for (let i = 0; i < slides.length; i++) {
      if (i == slideIndex) {
        slides[i].style.display = 'block'
      } else {
        slides[i].style.display = 'none'
      }
    }
  }

  showSlide()

  return (
    <div className="box-grid-product">
      <div className="box-grid-product-img">
        <img src={ImgProduct} />

        {/* <div className="mySlides fade">
          <img src={ImgProduct} />
        </div>
        <div className="mySlides fade">
          <img src={ImgProduct} />
        </div>
        <div className="mySlides fade">
          <img src={ImgProduct} />
        </div> */}

        <button className="btn-slide btn-prev">
          <span className="material-icons">keyboard_arrow_left</span>
        </button>
        <button className="btn-slide btn-next">
          <span className="material-icons">keyboard_arrow_right</span>
        </button>

        <button className="btn-add-product">
          <span>+</span>
        </button>
        <button className="product-quickview">
          <span className="material-icons">remove_red_eye</span>
        </button>
        <span className="product-sales badge badge-danger">-30% Off</span>
        <span className="product-new badge badge-info">Novo</span>
      </div>
      <div>
        <div className="d-flex justify-content-between mt-3 mb-2">
          <div>
            <img src={star} className="img-fluid mr-2" />
            <strong className="mr-1">4,3</strong>
            <span>(103)</span>
          </div>
          <div className="amount">R$4,90</div>
        </div>
        <div>
          <strong>
            Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg
          </strong>
        </div>
      </div>
    </div>
  )
}
