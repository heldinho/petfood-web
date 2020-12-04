import React, { useEffect, useState } from 'react'

import './style.css'

export default function ContextMenu(props) {
  const { x, y } = props.nodePosition
  const [open, setOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('open-context-menu-open', () => setOpen(true))
    window.addEventListener('open-context-menu-close', () => setOpen(false))
  })

  return (
    <div
      className="box-context-menu"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        display: open ? 'block' : 'none'
      }}
    >
      <ul className="ul-context-menu">
        <li className="li-context-menu" onClick={() => setOpen(false)}>
          Criar
        </li>
        <li className="li-context-menu" onClick={() => setOpen(false)}>
          Remover
        </li>
      </ul>
    </div>
  )
}
