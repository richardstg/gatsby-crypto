import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import TrezorImage from "../images/trezor"

const Trezor = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>2. Trezor</h2>
            <div className={articleStyles.image}>
              <TrezorImage />
            </div>
            {/* <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <p className={articleStyles.text}>
              TREZOR lanserades 2014 och var den första hårdvaruplånboken för
              kryptovalutor. De har genom åren utvecklats till att bli en av de
              mest respekterade varumärkena inom kryptovärlden. Med TREZOR kan
              man säkert förvara, skicka och ta emot en uppsjö av kryptovalutor.
              I dagsläget har man stöd för över 500 stycken.
            </p>
            <p className={articleStyles.text}>
              Då hårdvaruplånböcker håller de privata nycklarna på den fysiska
              enheten är de betydligt säkrare än traditionella
              mjukvaruplånböcker. TREZOR-plånboken kopplas aldrig upp till en
              internetserver. Detta gör det i princip omöjligt för en hacker att
              få tillgång till dina kryptovalutor.
            </p>
            <p className={articleStyles.text}>
              Man har sedan starten sålt över 1 miljon enheter och blivit ett av
              de populäraste valen bland kryptoinvesterare som vill säkra sina
              tillgångar. Priset för en TREZOR-plånbok ligger i dagsläget på 49
              EUR, och går upp till 500 EUR för de allra exklusivaste. Enligt
              oss klarar man sig dock gott på de billigare modellerna.
            </p>
            <p className={articleStyles.text}>
              När det kommer till att använda TREZOR-plånboken, vare sig det
              gäller transaktioner eller kolla sitt saldo, så måste man ange sin
              personliga pinkod. Pinkoden väljer man innan enheten används
              första gången. Man får även en backup-fras som måste skriva ner.
              Om plånboken tappas bort kan man använda backup-frasen för att
              komma åt tillgångarna från en annan TREZOR-enhet.
            </p>
            <ul>
              <li>
                <p className={articleStyles.text}>
                  Väletablerad och respekterad aktör
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Stöd för över 500 olika kryptovalutor
                </p>
              </li>
              <li>
                <p className={articleStyles.text}>
                  Ett av de absolut säkraste alternativen för förvaring av
                  kryptovalutor
                </p>
              </li>
            </ul>
            {/* </div> */}
            <a href="https://trezor.io">
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

export default Trezor
