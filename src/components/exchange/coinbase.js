import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import articleStyles from "./article.module.scss"
import CoinbaseImage from "../images/coinbase"

const Coinbase = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>1. Coinbase</h2>
            <div className={articleStyles.image}>
              <CoinbaseImage />
            </div>
            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <p className={articleStyles.text}>
                Coinbase är en av världens största och bäst beryktade
                kryptobörser. De har varit en av pionjärerna i att popularisera
                kryptovalutor och göra dem tillgängliga för allmänheten.
                Visionen är vara en av de mest pålitliga och användarvänliga
                börserna, något de hittills uppnått med stor framgång.
              </p>
              <p className={articleStyles.text}>
                Man har fokuserat på att introducera nya investerare in i
                kryptovärlden och möjliggöra för dem att köpa de största
                kryptovalutorna, däribland Bitcoin (BTC), Ethereum (ETH),
                Litecoin (LTC), Ripple (XRP), EOS, Tezos (XTZ), Chainlink
                (LINK), Cosmos (ATOM) och Basic Attention Token (BAT). Det finns
                även funktionalitet som stödjer återkommande köp. På så vis kan
                man automatisera investeringarna enligt ett förutbestämt
                tidschema, exempelvis varje dag, vecka eller månad. Användarna
                har möjlighet att förvara kryptovalutorna i den integrerade
                plånboken och från den utföra de transaktioner som önskas.
              </p>
              <p className={articleStyles.text}>
                På Coinbase kan man köpa kryptovalutor för lokala valutor,
                exempelvis svenska kronor, både genom bank/kreditkort och
                banköverföring. Man kan även sälja och få pengarna överförda
                till sitt bankkonto i Sverige.
              </p>
              <p className={articleStyles.text}>
                Deras tjänst hör till en av de mest lättanvända på marknaden.
                Även personer med låg teknisk nivå kan känna sig trygga. Detta i
                kombination med det välkända varumärket har gjort dem till det
                mest populära alternativet, framförallt bland förstagångsköpare.
              </p>
              <p className={articleStyles.text}>
                En av nackdelarna är att man med ett baskonto inte får tillgång
                till lika avancerad funktionalitet som hos vissa andra aktörer,
                i huvudsak med avseende på trading. Om man är ute efter detta
                rekommenderar vi att man ser närmare på vår utvärdering av{" "}
                <Link className={articleStyles.link} to="/trading/">
                  de bästa tradingplattformarna
                </Link>
                . För nybörjare och investerare som vill göra det enkelt för sig
                är Coinbase dock svårslaget. Enligt oss är de ett av de absolut
                bästa alternativen på marknaden.
              </p>
              <ul>
                <li>
                  <p className={articleStyles.text}>Ledande på marknaden</p>
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
            </div>
            <a href="https://coinbase.com">
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

export default Coinbase
