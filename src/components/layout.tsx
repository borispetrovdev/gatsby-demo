import React from "react"

import RocksetLogo from "../images/rockset_logo.svg"

const headerHeight = "10"

export const Layout = ({ children }) => {
  return (
    <div>
      <header className="outerSiteHeader wrap">
        <div className="innerHeader h-full w-full flex items-center mt-[var(--nav-distance-from-top)]">
          <img src={RocksetLogo} className="h-8 mx-5"/>
        </div>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}