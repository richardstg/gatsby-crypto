import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import walletStyles from "./service-area.module.scss"
import WalletSVGcolor from "../svg/walletSVGcolor"

const Wallet = () => {
  return (
    <Container className={walletStyles.outerWrapper} fluid>
      <Container className={walletStyles.innerWrapper}>
        <Row>
          <Col className={walletStyles.leftColumn} xs={12} md={8}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h2 className={walletStyles.title}>Plånböcker</h2>
              <p className={walletStyles.text}>
                När man har köpt kryptovalutor behöver man ett säkert ställe att
                förvara dem. Valet av plånbok är därmed ett av de viktigaste man
                ställs inför. För att du ska kunna ta kontrollen över dina
                kryptovalutor har vi valt ut de plånböcker som ger dina
                tillgångar det säkraste skyddet på marknaden.
              </p>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <Link to="/planbocker/">
                <button className={walletStyles.button}>Läs mer</button>
              </Link>
            </div>
          </Col>
          <Col className={walletStyles.rightColumn} xs={12} md={4}>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <WalletSVGcolor />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Wallet
