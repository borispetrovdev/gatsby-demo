import React from "react"

const headerHeight = "10"

export const Layout = ({ children }) => {
  return (
    <div>
      <header className={`fixed top-0 left-0 w-full h-10 bg-blue-500 text-white px-2 flex items-center`}>
        <span>Header</span>
      </header>
      <div className={`pt-10`}>
        {children}
      </div>
    </div>
  )
}