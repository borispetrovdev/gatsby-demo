import React from 'react'
import HamburgerIcon from "../images/hamburger-icon.svg"

export const NavToggleButton = 
  ({ mode = 'clickToOpen', onClick }:
   { mode: 'clickToOpen' | 'clickToClose', onClick: () => void}) => {

  return (
    <button className={`hamburger-button ${mode === 'clickToClose' ? 'is-active' : ''} ml-auto xl:hidden`} onClick={onClick}>
      <span className="hamburger-button-inner-box">
        <span className="hamburger-button-icon"></span>
      </span>
    </button>
  )
}