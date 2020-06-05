import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import CelsiusImage from "../images/celsius"

const Celsius = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>2. Celsius</h2>
            <div className={articleStyles.image}>
              <CelsiusImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Celsius grundades 2018 och har utvecklats till en av de största
              utlåningsplattformarna. Teamet som står bakom utgörs av en
              blandning av serieentreprenörer, rutinerade affärsmän,
              bankexperter, affärsutvecklare och blockkedjepionjärer.
            </p>
            <p className={articleStyles.text}>
              Man använder sig av ett räntesystem där räntan är beroende på hur
              mycket man håller av deras egna kryptovaluta. I dagsläget ligger
              räntan på 4,13-7,27% för Bitcoin (BTC), 3,82-7,27% för Ethereum
              (ETH), 4,13-5,26% för Litecoin (LTC), 3,61%-4,91% för Ripple
              (XRP), 2,89-3,92% för 0x (ZRX), 2,53-3,43% för Stellar (XLM),
              6,18-8,43% för DASH och 4,34-5,90% för EOS.
            </p>
            <p className={articleStyles.text}>
              Det finns inget lägsta belopp att låna ut, så även små belopp kan
              användas för att få ränta. Ytterligare en fördel är att man inte
              tar ut några avgifter i någon som helst form, vilket får betraktas
              som sällsynt.
            </p>
            <p className={articleStyles.text}>
              Kryptotillgångarna förvaras av BitGo, ett kvalificerat
              förvaringsinstitut som är marknadsledande inom förvaring av
              digitala tillgångar. BitGo är försäkrade för 100 miljoner USD,
              vilket kan användas för att täcka upp för eventuella förluster.
              Institutet är uppbackat av kapital från Goldman Sachs och Mike
              Novogratz investeringsfirma Galaxy Digital.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Erbjuder ränta för flertalet olika kryptovalutor{" "}
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>Låna ut valfritt belopp</p>
              </li>
              <li>
                <p className={articleStyles.text}>Inga avgifter</p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://celsius.network">
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

export default Celsius
