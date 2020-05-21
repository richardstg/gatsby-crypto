import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import ExodusImage from "../images/exodus"

const Exodus = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>3. Exodus</h2>
            <div className={articleStyles.image}>
              <ExodusImage />
            </div>
            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <p className={articleStyles.text}>
                Exodus grundades 2015 och erbjuder en mjukvaruplånbok för
                kryptovalutor. Den anses allmänt vara en av de ledande
                alternativen för personer som snabbt vill skaffa sig gratis och
                säker förvaring. För nybörjare som ännu inte skaffat sig en
                hårdvaruplånbok som TREZOR eller Ledger är Exodus ett utmärkt
                alternativ. I dagsläget finns stöd för över 100 kryptovalutor.
              </p>
              <p className={articleStyles.text}>
                Det är uppenbart att det lagts ner tid och tanke på design och
                användarupplevelse. Navigationen är intuitiv och enligt oss är
                detta en av de snyggaste och lättanvända mjukvaruplånböckerna.
                Något vi uppskattar är att man genom Exodus även får tillgång
                till en kryptobörs där man kan handla valutor utan att lämna
                plånboken. Varje köp medför dock en avgift, och det är dessa
                avgifter som företaget livnär sig på.
              </p>
              <p className={articleStyles.text}>
                Exodus-plånboken kan kommas åt både genom mobilappen och på
                datorn. För att komma in i plånboken används ett personligt
                lösenord och vid uppstarten ges man en backup-fras. Backup-
                frasen kan användas utifall man tappar bort sin mobil eller
                glömmer lösenordet.
              </p>
              <ul>
                <li>
                  <p className={articleStyles.text}>
                    Intuitiv, snygg och lättnavigerad
                  </p>
                </li>
                <li>
                  <p className={articleStyles.text}>
                    Stöd för över 100 olika kryptovalutor
                  </p>
                </li>
                <li>
                  <p className={articleStyles.text}>
                    Hög säkerhet i kategorin mjukvaruplånböcker
                  </p>
                </li>
              </ul>
            </div>
            <a href="https://exodus.io">
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

export default Exodus
