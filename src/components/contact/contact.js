import React from "react"
import { Container, Row, Col } from "reactstrap"

import contactStyles from "./contact.module.scss"

const Contact = () => {
  return (
    <Container className={contactStyles.outerWrapper} fluid>
      <Container className={contactStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h1 className={contactStyles.title}>Kontakt</h1>
            <div
              data-sal="fade"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <p className={contactStyles.text}>
                Kontakta oss genom att maila till info@cryptohelper.se.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact
