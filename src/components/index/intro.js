import React from "react"
import { Container, Row, Col } from "reactstrap"
import Typical from "react-typical"

import introStyles from "./intro.module.scss"
import LandingPageLogoSVG from "../svg/landingPageLogoSVG"

const Intro = () => {
  return (
    <Container className={introStyles.outerWrapper} fluid>
      <Container className={introStyles.innerWrapper}>
        <Row>
          <Col className={introStyles.leftColumn} xs={12} md={8}>
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1200"
              data-sal-easing="ease-in-back"
            >
              <h1 className={introStyles.title}>CryptoHelper</h1>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="400"
              data-sal-duration="1100"
              data-sal-easing="ease-in-back"
            >
              <h2 className={introStyles.subTitle}>
                Var kan jag{" "}
                <Typical
                  loop={Infinity}
                  wrapper="n"
                  steps={[
                    2000,
                    "köpa?",
                    2000,
                    "trada?",
                    2000,
                    "förvara?",
                    2000,
                    "låna ut?",
                    2000,
                  ]}
                />
              </h2>
              <hr className={introStyles.hr} />
            </div>
            <div
              data-sal="slide-down"
              data-sal-delay="300"
              data-sal-duration="1200"
              data-sal-easing="ease-in-back"
            >
              <p className={introStyles.text}>
                Vi gör det enkelt för dig att hitta de bästa tjänsterna och
                produkterna för kryptovalutor. Genom vår information hoppas vi
                att du ska kunna göra utbildade och välgrundade beslut gällande
                dina investeringar.
              </p>
            </div>
          </Col>
          <Col className={introStyles.rightColumn} xs={12} md={4}>
            <div
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <LandingPageLogoSVG />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Intro
