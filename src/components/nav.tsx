import React, { useState } from "react"

import RocksetLogo from "../images/rockset_logo.svg"

const NavLinks = ({ renderForMobile = false }) => {
  const items = 
    [ ['Product', '/'],
      ['Pricing', '/'],
      ['Customers', '/'],
      ['Learn', '/'],
      ['Company', '/'],
      ['Contact us', '/'],
    ].map(([linkText, href], index)=> {
      return (
        <li>
          <a className="ml-[1.8rem]" key={index} href={href}>{linkText}</a>
        </li>
      )
    });
  return (
    <ul className={`flex text-[1.125rem] justify-evenly font-medium`}>
      {items}
    </ul>
  )
}

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="h-[var(--nav-height)] left-0 top-0 right-0 fixed m-auto wrap z-[5000]">
      <header className="bg-white rounded-[.625rem] shadow-[0_0.875rem_1.5rem_rgba(102,0,153,0.12)] h-full w-full flex items-center justify-start mt-[var(--nav-distance-from-top)]">
        <img src={RocksetLogo} className="h-[2rem] sm:h-[2.35rem] lg:mt-[.25rem] ml-[.7rem] lg:ml-[1.9rem]"/>
        <NavLinks/>
      </header>
    </nav>
  );
}