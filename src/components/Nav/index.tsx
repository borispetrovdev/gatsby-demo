import React, { useState } from "react"

import RocksetLogo from "../../images/rockset_logo.svg"
import { NavToggleButton } from "./nav-toggle-button"
import "./styles.css"


const NavLinks = ({ renderForMobile = false, setIsMobileMenuOpen = undefined }) => {
  return (
    <>
      {
        [ ['Product', '/'],
          ['Pricing', '/'],
          ['Customers', '/'],
          ['Learn', '/'],
          ['Company', '/'],
          ['Contact us', '/'],
        ].map(([linkText, href], index)=> {
          return (
            <li key={index} className={renderForMobile ? 'my-[0.625rem]' : ''}>
              <a className={renderForMobile ? '' : 'ml-[1.8rem]'} href={href}>{linkText}</a>
            </li>
          )
        })
      }
    </>
  )
}

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logo = <img src={RocksetLogo} className="h-[2rem] sm:h-[2.35rem] lg:mt-[.25rem] ml-[.7rem] lg:ml-[1.9rem]"/>
  return (
    <nav className="left-0 top-0 right-0 fixed z-[5000] text-[1.125rem] font-medium whitespace-nowrap">
      <div className="relative wrap z-[2]">
        <header className="bg-white h-[var(--nav-height)] rounded-[.625rem] 
                           shadow-[0_0.875rem_1.5rem_rgba(102,0,153,0.12)] w-full 
                           flex items-center justify-start mt-[var(--nav-distance-from-top)]">
          {logo}
          <div className={`w-full hidden xl:flex xl:justify-between overflow-hidden`}>
            <ul className={`flex items-center`}>
              <NavLinks />
            </ul>
            <div className="flex gap-[1.8rem] items-center mr-[1rem]">
              <a href="/" className="text-coral">Login</a>
              <a href="/" className="btn bg-coral font-medium rounded-[.2175rem] py-[.625rem] text-[1rem] leading-[1.25]">Try free</a>
            </div>
          </div>
          <NavToggleButton 
            mode={isMobileMenuOpen ? 'clickToClose' : 'clickToOpen'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </header>
      </div>
      {isMobileMenuOpen ? 
        <div className="wrap w-full top-0 absolute bg-white pt-[calc(var(--nav-offset-total)+1rem)] z-[1] xl:hidden">
          <ul className={`flex flex-col`}>
            <NavLinks renderForMobile={true} />
          </ul>
          <a href="/" className="btn text-center bg-coral font-medium block w-full mb-[1.5rem] mt-[0.5rem]">Request a demo</a>
        </div> : null
      }
    </nav>
  );
}