import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import exchangeStyles from "./service-area.module.scss"
import ExchangeSVGcolor from "../svg/exchangeSVGcolor"

const Exchange = () => {
  return (
    <Container className={exchangeStyles.outerWrapper} fluid>
      <Container className={exchangeStyles.innerWrapper}>
        <Row>
          <Col className={exchangeStyles.leftColumn} xs={12} md={8}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h2 className={exchangeStyles.title}>Köpa kryptovalutor</h2>
              <p className={exchangeStyles.text}>
                Det är många som undrar vilken handelsplats som är bäst. För att
                du ska kunna komma igång och investera har vi valt ut de
                handelsplatser med med högst pålitlighet, lägst avgifter och
                smidigast användargränssnitt. Enligt oss är dessa optimala för
                nybörjare som ska köpa sina första kryptovalutor.
              </p>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <Link to="/kopa">
                <button className={exchangeStyles.button}>Läs mer</button>
              </Link>
            </div>
          </Col>
          <Col className={exchangeStyles.rightColumn} xs={12} md={4}>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <ExchangeSVGcolor />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Exchange
