import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import lendStyles from "./service-area.module.scss"
import LendSVGcolor from "../svg/lendSVGcolor"

const Lend = () => {
  return (
    <Container className={lendStyles.outerWrapper} fluid>
      <Container className={lendStyles.innerWrapper}>
        <Row>
          <Col className={lendStyles.leftColumn} xs={12} md={8}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h2 className={lendStyles.title}>Utlåning</h2>
              <p className={lendStyles.text}>
                Utlåning är en av de senaste trenderna inom kryptovärlden.
                Numera kan man få ränta på sina kryptovalutor genom att låna ut
                dem på olika låneplattformar. För den som är intresserad av att
                tjäna en passiv inkomst på sina tillgångar har vi valt ut de
                tjänster som ger högst avkastning i kombination med störst
                trygghet.
              </p>
            </div>
            <Link to="/utlaning/">
              <div
                data-sal="fade"
                data-sal-delay="100"
                data-sal-duration="800"
                data-sal-easing="ease-out-bounce"
              >
                <button className={lendStyles.button}>Läs mer</button>
              </div>
            </Link>
          </Col>
          <Col className={lendStyles.rightColumn} xs={12} md={4}>
            <div
              data-sal="fade"
              // data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <LendSVGcolor />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Lend
