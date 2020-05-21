import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import KrakenImage from "../images/kraken"

const Kraken = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>3. Kraken</h2>
            <div className={articleStyles.image}>
              <KrakenImage />
            </div>
            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <p className={articleStyles.text}>
                Kraken grundades 2011 och deras kryptobörs lanserades 2013.
                Detta gör dem till en av de äldsta och mest väletablerade
                kryptobörserna i världen. Tjänsten har vidareutvecklats genom
                åren och idag erbjuder man en avancerad tradingplattform där man
                kan trada kryptovalutor, både med och utan hävstång. De anses
                vara en av de pålitligaste alternativen för professionella och
                institutionella investerare.
              </p>
              <p className={articleStyles.text}>
                Kunderna har möjlighet att spekulera i både upp- och nedgångar
                genom att ta både korta och långa positioner. I nuläget erbjuder
                man upp till 5x hävstång på kryptovalutor som Bitcoin (BTC),
                Ethereum (ETH), Ethereum Classic (ETC), Tether (USDT), Ripple
                (XRP), Tezos (XTZ), Monero (XMR), Augur (REP) och Bitcoin Cash
                (BCH). Man kan köpa kryptovalutor genom banköverföring, vilket
                gör det relativt smidigt för nybörjare.
              </p>
              <p className={articleStyles.text}>
                Det är allmänt känt att en av Krakens största fördelar utgörs av
                deras höga säkerhet och låga avgifter. Ett område de tidigare
                fått viss kritik för är deras kundtjänst. Detta upplever dock vi
                och många andra att man åtgärdat. Idag tillhandahåller man en
                live-chat öppen 24/7, dit man kan vända sig när man har frågor.
                Enligt vissa överträffar deras kundtjänst numera den hos
                Coinbase.
              </p>
              <p className={articleStyles.text}>
                Med Kraken får man tillgång till en väletablerad, pålitlig och
                prövad tradingplattform som genomgått tidens test. Om man nöjer
                sig med en hävstång på 5x är Kraken en av de bästa och
                pålitligaste alternativen på marknaden.
              </p>
              <ul>
                <li>
                  <p className={articleStyles.text}>
                    Väletablerad aktör med hög säkerhet
                  </p>
                </li>
                <li>
                  <p className={articleStyles.text}>
                    Bland de lägsta avgifterna på marknaden
                  </p>
                </li>
                <li>
                  <p className={articleStyles.text}>
                    Möjlighet att köpa kryptovalutor genom banköverföring
                  </p>
                </li>
              </ul>
            </div>
            <a href="https://kraken.com">
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

export default Kraken
