import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import tradeStyles from "./service-area.module.scss"
import TradeSVGcolor from "../svg/tradeSVGcolor"

const Trade = () => {
  return (
    <Container className={tradeStyles.outerWrapper} fluid>
      <Container className={tradeStyles.innerWrapper}>
        <Row>
          <Col className={tradeStyles.leftColumn} xs={12} md={8}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h2 className={tradeStyles.title}>Trading</h2>
              <p className={tradeStyles.text}>
                Trading av kryptovalutor är ett område som på senare år vuxit
                explosionsartat. I takt med tillväxten har det lanserats
                flertalet nya tradingplattformar. Det råder således ingen brist
                på alternativ, men frågan många ställer sig är vilken
                tradingplattform man bör använda. För att förenkla valprocessen
                har vi valt ut de som vi anser tillhör de främsta.
              </p>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <Link to="/trading/">
                <button className={tradeStyles.button}>Läs mer</button>
              </Link>
            </div>
          </Col>
          <Col className={tradeStyles.rightColumn} xs={12} md={4}>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <TradeSVGcolor />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Trade
