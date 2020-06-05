import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import articleStyles from "./article.module.scss"
import CoinmamaImage from "../images/coinmama"

const Coinmama = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>3. Coinmama</h2>
            <div className={articleStyles.image}>
              <CoinmamaImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Coinmama är en kryptomäklare som erbjuder en snabb och
              okomplicerad tjänst. Man är möjligtvis den aktör som är bäst på
              att ge information och support till sina användare. Detta gör dem
              ideala för individer som är nya inom kryptovärlden och ska göra
              sina allra första investeringar.
            </p>
            <p className={articleStyles.text}>
              Man kan köpa några av de populäraste kryptovalutorna, såsom
              Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP),
              Cardano (ADA), Tezos (XTZ) och EOS. Köpen kan göras från i princip
              hela världen med både bank/kreditkort och banköverföring. Det går
              även att sälja kryptovalutor för lokala valutor och få pengarna
              överförda till sitt bankkonto i Sverige.
            </p>
            <p className={articleStyles.text}>
              Deras främsta kännetecken är just enkelheten. För de som snabbt
              och smidigt vill köpa kryptovalutor, är Coinmama ett av de bästa
              alternativen. En nackdel jämfört med Coinbase är att det inte
              finns någon integrerad plånbok, och man måste därmed använda en
              extern. För den intresserade rekommenderar vi att man läser vår
              utvärdering av{" "}
              <Link className={articleStyles.link} to="/planbocker/">
                de bästa kryptoplånböckerna
              </Link>
              . Ytterligare en nackdel är att man tar ut en avgift som ligger
              något högre än hos vissa av konkurrenterna.
            </p>
            <p className={articleStyles.text}>
              För den investerare som är ute efter ett brett utbud av
              kryptovalutor och vill betala de allra lägsta avgifterna så finns
              det bättre alternativ. Om man däremot är ute efter en smidig
              tjänst utan onödigt krångel och som erbjuder god kundsupport, då
              är Coinmama ett av de bättre alternativen.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Mycket information och stöd för nybörjare
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Enkel och smidig användning
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Köp med bank/kreditkort eller banköverföring
                </p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://coinmama.com">
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

export default Coinmama
