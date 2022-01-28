import React, { useState } from 'react'

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(0)
  const [divWidth, setDivWidth] = useState('')

  const openNav = () => {
    console.log('Inside openNav')
    if (navStatus === 0) {
      setDivWidth('100%')
      setNavStatus(1)
    } else {
      setDivWidth('0px')
      setNavStatus(0)
    }
  }
  return (
    <div className='main-div' style={{ width: divWidth }}>
      <button onClick={openNav}>
        <i className='fas fa-bars'></i>
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}
