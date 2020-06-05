import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import BitpandaImage from "../images/bitpanda"

const Bitpanda = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>2. Bitpanda</h2>
            <div className={articleStyles.image}>
              <BitpandaImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Bitpanda erbjuder en handelsplats riktad till den europeiska
              marknaden och har sedan starten 2014 växt till att bli en av de
              mer populära alternativen i Europa. För medborgare inom EU är
              Bitpanda en av de absolut billigaste alternativen för att köpa
              kryptovalutor. Både bank/kreditkort och banköverföring accepteras.
            </p>
            <p className={articleStyles.text}>
              På Bitpanda kan man köpa och sälja några av de allra populäraste
              kryptovalutorna, bl.a. Bitcoin, Ethereum, Ripple, Litecoin, Tezos,
              EOS, Chainlink, Cardano, 0x och IOTA. Användargränssnittet är
              tilltalande och tjänsten enkel att använda. Kundsupporten har
              också ett gott rykte om sig och ligger klart över genomsnittet för
              branschen. Liksom på Coinbase finns det en integrerad plånbok där
              man kan förvara sina kryptovalutor, vilket förenklar för
              förstagångsköpare.
            </p>
            <p className={articleStyles.text}>
              Likheterna med Coinbase är många, och om Coinbase anses vara
              ledaren så kan Bitpanda liknas vid uppstickaren med siktet
              inställt på att bli nummer ett. Bitpanda har något lägre avgifter,
              även om det inte är helt transparent då avgifterna inte redovisas
              separat, utan i stället ligger inbakade i totalpriset.
            </p>
            <p className={articleStyles.text}>
              De låga avgifterna, kundsupporten och det användarvänliga
              gränssnittet gör Bitpanda till ett intressant alternativ för
              europeiska medborgare som är ute efter att göra sina första
              kryptoinvesteringar.
            </p>
            <p className={articleStyles.text}>
              De låga avgifterna, kundsupporten och det användarvänliga
              gränssnittet gör Bitpanda till ett intressant alternativ för
              europeiska medborgare som är ute efter att göra sina första
              kryptoinvesteringar.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Bland de lägsta avgifterna på marknaden
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>Integrerad plånbok</p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Köp med bank/kreditkort eller banköverföring
                </p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://bitpanda.com">
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

export default Bitpanda
