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
              Allt fler människor intresserar sig för kryptovalutor och deras
              potential, vilket leder till ett ökat behov av säker förvaring.
              Kryptoplånböcker spelar därmed en viktig roll i användningen och
              spridningen av kryptovalutor. Varje plånbok är unik och skiljer
              sig mer eller mindre åt från andra. Valet måste därmed göras
              utifrån vilken som passar ens egen situation.
            </p>
            <p className={articleStyles.text}>
              De tre nämnda plånböckerna, TREZOR, Ledger och Exodus, anses
              enligt oss tillhöra de främsta på marknaden. För de som enkelt
              vill komma igång och investera mindre belopp räcker det troligtvis
              med att hålla kryptovalutorna i en mjukvaruplånbok, alternativt i
              börsernas integrerade plånböcker. Man ska dock komma ihåg att
              mjukvaruplånböcker och börser hackats förr. Om man håller större
              belopp bör man därmed i ett så tidigt stadie som möjligt se sig om
              efter en hårdvaruplånbok. Detta är den i särklass säkraste formen
              av förvaring. Ett köp av en TREZOR eller Ledger bör således
              betraktas som väl investerade pengar.
            </p>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Outro
