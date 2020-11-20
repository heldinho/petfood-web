import React from 'react'

import './style.css'

export default function Petshop() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('openSidebarPetshop', () => {
      setOpen(true)
    })
  }, [])

  return (
    <div className={open ? 'box-sidebar-petshop show' : 'box-sidebar-petshop'}>
      <div className="header-sidebar-petshop">
        <h2 className="title-sidebar-petshop">PetFood</h2>
        <span
          className="material-icons close-sidebar-petshop"
          onClick={() => setOpen(false)}
        >
          close
        </span>
      </div>
      <div className="body-sidebar-petshop"></div>
      <div className="footer-sidebar-petshop"></div>
    </div>
  )
}
