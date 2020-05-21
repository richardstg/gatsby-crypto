import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import articleStyles from "./article.module.scss"

const Outro = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h2 className={articleStyles.title}>Slutord</h2>
            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <p className={articleStyles.text}>
                När det kommer till att köpa kryptovalutor så varierar
                människors behov. Det gäller att göra valet utifrån sin egen
                situation. Det finns dock vissa krav som bör uppfyllas och
                samtliga av de nämnda tjänsterna gör det. Enligt oss utgör dessa
                de bästa alternativen för nybörjare som vill investera i
                kryptovalutor. Oavsett vilken av dem som man väljer så bör man
                bli nöjd.
              </p>
              <p className={articleStyles.text}>
                Något som starkt talar för Coinbase och Bitpanda är
                integreringen av plånbok. Detta gör det smidigt för
                förstagångsköpare som snabbt vill komma igång utan att behöva
                skaffa en extern plånbok. På sikt är det dock säkrast att man
                använder sig av en sådan. För mer information rekommenderar vi
                att man läser vårt avsnitt om{" "}
                <Link className={articleStyles.link} to="/planbocker/">
                  de bästa plånböckerna på marknaden
                </Link>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Outro
