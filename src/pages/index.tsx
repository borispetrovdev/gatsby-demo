import * as React from "react"

import styled from "styled-components"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const Header = styled.header({
  width: "100%",
  height: "2rem",
  background: "blue",
  position: "fixed",
  padding: "0 0.5rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  top: 0,
  left: 0,
})

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      this is a page
    </main>
  )
}

export default IndexPage
