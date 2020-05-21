import React from "react"
import { Container, Row, Col } from "reactstrap"

import introStyles from "./intro.module.scss"

const Intro = () => {
  return (
    <Container className={introStyles.outerWrapper} fluid>
      <Container className={introStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <div
              data-sal="fade"
              data-sal-delay="5"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h1 className={introStyles.title}>
                De tre bästa platserna att köpa kryptovalutor [2020]
              </h1>
              <p className={introStyles.date}>Senast uppdaterad: 2020-05-08</p>

              <p className={introStyles.text}>
                Att välja rätt handelsplats för att köpa Bitcoin (BTC), Ethereum
                (ETH), Ripple (XRP) och andra kryptovalutor kan upplevas som
                svårt. Valmöjligheterna är många, men man vet inte vem som
                erbjuder tjänsten med högst pålitlighet, lägst avgifter och
                smidigast användargränssnitt. Vårt mål är att göra det enklare
                för dig. Vi har valt ut de tre bästa tjänsterna för att köpa
                kryptovalutor. Enligt oss är dessa perfekta för nybörjare som
                ska köpa sina första kryptovalutor.
              </p>
              <p className={introStyles.text}>
                Vårt urval är begränsat till aktörer som tillåter köp med både
                bank/kreditkort och banköverföring, samt försäljning för lokala
                valutor (SEK, EUR och USD). Fokus har legat på tjänster som
                erbjuder ett enkelt och användarvänligt gränssnitt. Vidare har
                vi fokuserat på aktörer med stort förtroendekapital, hög
                pålitlighet och låga avgifter. Samtliga tjänster som presenteras
                hör till de mest respekterade och är allmänt att betraktas som
                ledande inom branschen.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Intro
