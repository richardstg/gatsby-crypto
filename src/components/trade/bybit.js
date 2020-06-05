import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import BybitImage from "../images/bybit"

const Bybit = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>2. Bybit</h2>
            <div className={articleStyles.image}>
              <BybitImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Bybit grundades i march 2018 och tillhör en av de främsta
              tradingplattformarna. Man erbjuder handel med Bitcoin (BTC),
              Ethereum (ETH), Ripple (XRP) och EOS.
            </p>
            <p className={articleStyles.text}>
              På plattformen kan man använda upp till 100x hävstång. Tradare kan
              ta både långa och korta positioner, och därmed profitera oavsett
              om marknaden går upp eller ner. Det är inte möjligt att köpa
              kryptovalutor med kort eller banköverföring. För att börja trada
              måste man köpa dessa på annan plats, exempelvis{" "}
              <a className={articleStyles.link} href="https://coinbase.com">
                Coinbase
              </a>
              ,{" "}
              <a className={articleStyles.link} href="https://bitpanda.com">
                Bitpanda
              </a>{" "}
              eller{" "}
              <a className={articleStyles.link} href="https://coinmama.com">
                Coinmama
              </a>
              , och därefter överföra till sitt Bybit-konto.
            </p>
            <p className={articleStyles.text}>
              Tradingmotorn på Bybit är utav absoluta världsklass. Vi har aldrig
              varit med om tekniska bekymmer orsakade av överbelastning, problem
              med stop-loss eller slippadge på marknadsordrar. Detta har gjort
              att många professionella traders som tidigare använt sig av Bitmex
              övergått till Bybit. Trots att Bybit är en relativt ny aktör så
              har man hög likviditet. Traders som handlar med positioner på
              mindre än 5 000 000 USD bör därmed inte oroa sig.
            </p>
            <p className={articleStyles.text}>
              Förutom den tekniska styrkan och höga likviditeten uppskattar vi
              användarupplevelsen. Bybit är en av de snyggaste och smidigaste
              tradingplattformarna. Kundtjänsten är öppen 24/7 i form av en
              live-chat och enligt vår erfarenhet fungerar denna utmärkt.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Smidig användning och snyggt användargränssnitt
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Teknisk prestanda av världsklass
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>Hög likviditet</p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://bybit.com">
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

export default Bybit
