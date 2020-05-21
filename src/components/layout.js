import React from "react"
import { Container } from "reactstrap"

import Header from "./header"
import Footer from "./footer"
import "../styles/app.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <Container className={layoutStyles.container} fluid>
      <Header />
      <div className={layoutStyles.main}>{props.children}</div>
      <Footer />
    </Container>
  )
}

export default Layout
