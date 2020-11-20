import React from 'react'

import './style.css'

export default function Product() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('openSidebarProduct', () => {
      setOpen(true)
    })
  }, [])

  return (
    <div className={open ? 'box-sidebar-product show' : 'box-sidebar-product'}>
      <div className="header-sidebar-product">
        <h2 className="title-sidebar-product">Product</h2>
        <span
          className="material-icons close-sidebar-product"
          onClick={() => setOpen(false)}
        >
          close
        </span>
      </div>
      <div className="body-sidebar-product"></div>
      <div className="footer-sidebar-product"></div>
    </div>
  )
}
