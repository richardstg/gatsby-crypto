import React from "react"
import { Container, Row, Col } from "reactstrap"

import introStyles from "./intro.module.scss"

const Intro = () => {
  return (
    <Container className={introStyles.outerWrapper} fluid>
      <Container className={introStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <div
              data-sal="fade"
              data-sal-delay="5"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h1 className={introStyles.title}>
                De tre bästa tradingplattformarna för kryptovalutor [2020]
              </h1>
              <p className={introStyles.date}>Senast uppdaterad: 2020-05-10</p>

              <p className={introStyles.text}>
                Intresset för trading av kryptovalutor har vuxit kraftigt under
                de senaste åren. Kryptovalutor är volatila, och det skapar rätt
                förutsättningar för att kunna tjäna stora summor pengar om man
                lyckas förutse marknadsrörelserna. Dessutom är kryptomarknaderna
                till skillnad traditionella marknader öppna 24/7. Med Bitcoin
                (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC) och andra
                kryptovalutor kan man därmed trada när man vill. En annan fördel
                är att marknaderna än så länge är relativt oreglerade. Detta gör
                det enkelt att komma igång utan tidskrävande och komplicerade
                verifieringsprocesser.
              </p>
              <p className={introStyles.text}>
                Det finns många aktörer som erbjuder tradingplattformar, men det
                kan vara svårt att veta vilken som är bäst. Därför har vi valt
                ut tre tradingplattformar med ett tilltalande och enkelt
                användargränssnitt, hög säkerhet och prestanda, låga avgifter
                och god kundsupport. Enligt oss tillhör dessa de tre främsta på
                marknaden.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Intro
