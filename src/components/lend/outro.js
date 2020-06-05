import React from "react"
import { Container, Row, Col } from "reactstrap"

import outroStyles from "./outro.module.scss"

const Outro = () => {
  return (
    <Container className={outroStyles.outerWrapper} fluid>
      <Container className={outroStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={outroStyles.title}>Slutord</h2>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={outroStyles.text}>
              Utlåning av kryptovalutor är ett relativt nytt och spännande
              område som vi än bara sett början på. Det innebär nya möjligheter
              för individer att skapa sig passiva inkomster från sina
              investeringar. Utlåningen fungerar som ett viktigt steg i
              adoptionen av kryptovalutor och etableringen av ett nytt
              finansiellt system.
            </p>
            <p className={outroStyles.text}>
              För den som investerar med ett långsiktigt förhållningssätt, och
              inte vill riskera sina tillgångar genom trading, är utlåning ett
              intressant alternativ. Genom ränta på ränta växer kapitalet
              exponentiellt och för den som är tålmodig finns möjlighet att öka
              sitt innehav väsentligt. Om vi får se en liknande värdeutveckling
              av kryptovalutor som vi har historiskt så kan det i slutändan röra
              sig om stora belopp. Allt detta utan att behöva lyfta ett enda
              finger. Man ska dock komma ihåg att utlåning inte är helt
              riskfritt och man bör därför tänka igenom noggrant hur stor del av
              sitt kryptokapital man vill låna ut. Sedan är det av största vikt
              att man väljer en seriös och pålitlig låneplattform, likt de som
              nämnts ovan.{" "}
            </p>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Outro
