import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import BlockfiImage from "../images/blockfi"

const BlockFi = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>1. BlockFi</h2>
            <div className={articleStyles.image}>
              <BlockfiImage />
            </div>
            {/* <div
              data-sal="fade"
              data-sal-duration="400"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              BlockFi är en privatägd New York-baserad kryptoutlåningsplattform
              som grundades 2017. Ledningen utgörs av ett team med decennier av
              samlad erfarenhet från ledande positioner inom startups och den
              traditionella finans- och banksektorn. Bland investerarna i
              BlockFi återfinns tungviktare som Valar Ventures (Peter Thiel),
              Winklevoss Capital, Galaxy Digital (Mike Novogratz), ConsenSys
              Ventures, Morgan Creek (Anthony Pompliano) med mera. Vem som helst
              är välkommen att låna ut. Låntagarna utgörs i huvudsak av stora
              institutionella investerare.
            </p>
            <p className={articleStyles.text}>
              Räntorna som erbjuds är i dagsläget 6% för Bitcoin (BTC), 4,5% för
              Ethereum (ETH) och 3,8% för Litecoin (LTC). Det går att låna ut
              valfritt belopp. Utbetalningen sker i samma valuta som lånas ut.
              Med ränta på ränta kan detta göra stor skillnad för storleken på
              ens kapital. På fem år kan den som är villig öka sitt
              kryptokapital med nästan 34%.
            </p>
            <p className={articleStyles.text}>
              Den som lånar ut kan när som helst välja att ta tillbaka sina
              kryptovalutor. Detta kan göras avgiftsfritt en gång per månad.
              Vill man göra fler uttag kostar det 0,0025 BTC eller 0,0015 ETH.
            </p>
            <p className={articleStyles.text}>
              En av de viktigaste frågorna när det kommer till utlåning är
              säkerheten hos plattformen. Tillgångarna förvaras av Gemini, som
              är ett licensierat förvaringsinstitut reglerat av NYDFS, och som
              nyligen blev SOC2 certifierade av Deloitte. Gemini förvarar 95% av
              kryptovalutorna offline i cold-storage. Resterande 5% förvaras i
              hot-wallets och är försäkrade av Aon. Gemini har sedan grundandet
              aldrig blivit bestulet eller hackat och är försäkrat med över 100
              miljoner USD. Man bör därmed betrakta BlockFi som ett av de
              säkraste alternativen på marknaden.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Välrenommerad ledning uppbackad av några av tech-världens
                  främsta investerare
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>Hög säkerhetsnivå </p>
              </li>
              <li>
                <p className={articleStyles.text}>Låna ut valfritt belopp</p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://blockfi.com">
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

export default BlockFi
