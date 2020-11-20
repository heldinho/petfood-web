import React from 'react'

import star from '../../../assets/star.png'

import img1 from '../../../assets/products/img1.jpg'
import img2 from '../../../assets/products/img2.jpg'
import img3 from '../../../assets/products/img3.jpg'
import img4 from '../../../assets/products/img4.jpg'

export default function ProductList(props) {
  const [slideIndex, setSlideIndex] = React.useState(1)

  const { isSales, isNew } = props

  const Images = [
    { slide: 1, img: img1 },
    { slide: 2, img: img2 },
    { slide: 3, img: img3 },
    { slide: 4, img: img4 }
  ]

  function nextSlide() {
    if (slideIndex >= Images.length) {
      setSlideIndex(1)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }

  function prevSlide() {
    if (slideIndex <= 1) {
      setSlideIndex(Images.length)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  // function showSlide() {
  //   const slides = document.getElementsByClassName('mySlides')
  //   for (let i = 0; i < slides.length; i++) {
  //     if (i == slideIndex) {
  //       slides[i].style.display = 'block'
  //     } else {
  //       slides[i].style.display = 'none'
  //     }
  //   }
  // }

  function addCart() {
    const event = new CustomEvent('cartCount')
    window.dispatchEvent(event)
  }

  function openSidebarProduct() {
    const event = new CustomEvent('openSidebarProduct')
    window.dispatchEvent(event)
  }

  return (
    <div className="box-grid-product">
      <div className="box-grid-product-img">
        {Images.map((image) => (
          <img
            src={image.img}
            className={
              image.slide === slideIndex ? 'img-fluid active' : 'img-fluid'
            }
            key={image.slide}
          />
        ))}

        {/* <div className="mySlides fade">
          <img src={ImgProduct} />
        </div>
        <div className="mySlides fade">
          <img src={ImgProduct} />
        </div>
        <div className="mySlides fade">
          <img src={ImgProduct} />
        </div> */}

        <button className="btn-slide btn-prev" onClick={() => prevSlide()}>
          <span className="material-icons">keyboard_arrow_left</span>
        </button>
        <button className="btn-slide btn-next" onClick={() => nextSlide()}>
          <span className="material-icons">keyboard_arrow_right</span>
        </button>

        <button className="btn-add-product" onClick={() => addCart()}>
          <span>+</span>
        </button>
        <button
          className="product-quickview"
          onClick={() => openSidebarProduct()}
        >
          <span className="material-icons">remove_red_eye</span>
        </button>

        {
          isSales ?
            <span className="product-sales badge badge-danger">-30% Off</span>
          : false
        }

        {
          isNew ?
            <span className="product-new badge badge-info">Novo</span>
          : false
        }

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
