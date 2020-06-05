import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import NexoImage from "../images/nexo"

const Nexo = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>3. Nexo</h2>
            <div className={articleStyles.image}>
              <NexoImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Nexo grundades 2017 i Schweiz av en grupp individer som tidigare
              startat Credissimo, en ledande europeisk FinTech-grupp med
              verksamhet inom konsumentlån, e-handel och fakturaservice. Bolaget
              opererar enligt SEC:s krav och de regler som gäller för regionerna
              de verkar i.
            </p>
            <p className={articleStyles.text}>
              Man har som kund möjlighet att låna ut Euros till en ränta av 8%.
              Än så länge tillhandahåller de inte någon utlåning av
              kryptovalutor. För detta rekommenderas{" "}
              <a className={articleStyles.link} href="https://blockfi.com">
                BlockFi
              </a>{" "}
              och{" "}
              <a className={articleStyles.link} href="https://celsius.network">
                Celsius
              </a>
              . Inom kort kommer man dock ha möjlighet att låna ut Bitcoin
              (BTC), Ethereum (ETH), Ripple (XRP) och Bitcoin Cash (BCH).
            </p>
            <p className={articleStyles.text}>
              Nexo tillhandahåller även ett kreditkort backat av MasterCard som
              kan användas för att göra köp i affärer och online, eller ta ut
              pengar från en bankomat. Kortet erbjuder även 5% cashback på varje
              köp. Pengarna sätts in i Nexo-plånboken.
            </p>
            <p className={articleStyles.text}>
              För den som vill låna Euros går det att göra med över tio olika
              kryptovalutor som säkerhet. Kryptotillgångarna förvaras precis som
              för Celsius av välrenommerade BitGo, vars tillgångar är försäkrade
              för 100 miljoner USD.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>Integrerat kreditkort</p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Snart möjligt att låna ut kryptovalutor
                </p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://nexo.io">
              <div
                data-sal="fade"
                data-sal-delay="100"
                data-sal-duration="800"
                data-sal-easing="ease-out-bounce"
              >
                <button className={articleStyles.button}>Besök hemsida</button>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Nexo
