import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import LedgerImage from "../images/ledger"

const Ledger = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>1. Ledger</h2>
            <div className={articleStyles.image}>
              <LedgerImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Ledger erbjuder hårdvaruplånböcker och har sedan starten 2014
              lyckats skapa sig en trogen kundskara. Plånboken möjliggör säker
              förvaring och transaktion av över 1000 olika kryptovalutor.
            </p>
            <p className={articleStyles.text}>
              Nycklarna förvaras på din Ledger-enhet. Man kan därmed känna sig
              säker på att tillgångarna ligger utom räckhåll för hackare.
              Ledgern har, till skillnad från konkurrenten TREZOR, två lager av
              säkerhet i stället för ett. Man har dessutom implementerat ett
              antal andra funktioner som gör den ännu säkrare. En av dessa är
              randomisering av siffror vid intryckning av pinkod, vilket
              omöjliggör för gissning genom slitage på knappar.
            </p>
            <p className={articleStyles.text}>
              En Ledger Nano S, den billigaste och populäraste modellen, kostar
              59 EUR och har sålt i mer än 1,4 miljoner exemplar världen över.
              Deras senaste och dyraste modell, Ledger Nano X, går på 120 EUR.
              Enligt oss är båda modellerna utmärkta val som ger en högsta
              möjliga säkerhet. Deras användargränssnitt är otroligt intuitivt
              och gör plånboken enkel att använda, oavsett vilken teknisk nivå
              man besitter.
            </p>
            <p className={articleStyles.text}>
              En personlig pinkod används för att låsa upp enheten. På så vis
              får man tillgång till sitt saldo och kan utföra transaktioner.
              Användaren förses även med en backup-fras som kan användas för att
              få tillgång till sina kryptovalutor från en annan enhet.
              Kryptovalutorna går därmed inte förlorade utifall man tappar bort
              sin Ledger.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Intuitivt och lättanvänt användargränssnitt
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Stöd för över 1000 olika kryptovalutor
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Säkerhet av världsklass med ständig innovation
                </p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://ledger.com">
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

export default Ledger
