import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"

const Outro = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>Slutord</h2>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              Trading av kryptovalutor har vuxit enormt de senaste åren. Allt
              fler registrerar sig på diverse tradingplattformar och det finns
              inget som tyder på att tillväxten skulle avta. Med marknader som
              är öppna 24/7, hög volatilitet och enkla registreringsprocesser är
              det naturligt att det skapar ett stort intresse. Vi råder dock
              alla att vara försiktiga, särskilt nybörjare, och inte riskera mer
              än vad man har råd att förlora. Detta gäller särskilt när man
              använder hävstång.
            </p>
            <p className={articleStyles.text}>
              Har man väl bestämt sig för att trada så gäller det att välja rätt
              tradingplattform. På så vis ger man sig de bästa förutsättningarna
              för att kunna lyckas. De tre alternativ som presenterats utgör
              enligt oss de främsta och passar både nyblivna och erfarna
              tradare.
            </p>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Outro
