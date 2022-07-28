import styled from "styled-components"
import "./layout.css"

import React from "react"


const headerHeight = "2rem"

const Header = styled.header({
  width: "100%",
  height: headerHeight,
  background: "blue",
  position: "fixed",
  padding: "0 0.5rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  top: 0,
  left: 0,
})

const PageWrapper = styled.div({
  paddingTop: headerHeight
})

export const Layout = ({ children }) => {
  return (
    <div>
      <Header>Header</Header>
      <PageWrapper>
        {children}
      </PageWrapper>
    </div>
  )
}