import React from "react"
import { Container, Row, Col } from "reactstrap"

import articleStyles from "./article.module.scss"
import PhemexImage from "../images/phemex"

const Phemex = () => {
  return (
    <Container className={articleStyles.outerWrapper} fluid>
      <Container className={articleStyles.innerWrapper}>
        <Row>
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            className={articleStyles.text}
          >
            <h2 className={articleStyles.title}>1. Phemex</h2>
            <div className={articleStyles.image}>
              <PhemexImage />
            </div>
            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <p className={articleStyles.text}>
                Phemex lanserades i november 2019 och har på kort tid blivit en
                favorit för både erfarna och nyblivna traders. Grundarna till
                Phemex har en bakgrund inom den traditionella finansbranschen,
                med decennier av samlad erfarenhet från lednings- och
                utvecklarpositioner på bl.a. Morgan Stanley. Man strävar efter
                att erbjuda en förstklassig tradingtjänst av institutionell
                nivå. Hittills har man lyckats leverera utan anmärkningar.
              </p>
              <p className={articleStyles.text}>
                Man erbjuder trading av de största kryptovalutorna i form av
                Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC) och
                EOS. En fördel gentemot konkurrenterna är att man breddat sitt
                utbud till att även inkludera Chainlink (LINK) och Tezos (XTZ).
                För den som är intresserad av mer traditionella tillgångar är
                det dessutom möjligt att handla guldterminer. Man kan inte köpa
                kryptovalutor för lokala valutor (ex. SEK, EUR och USD), utan
                måste först köpa kryptovalutor på en annan börs (t.ex.{" "}
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
                ) och sedan överföra till sitt Phemex-konto. Därefter kan man
                börja trada.
              </p>
              <p className={articleStyles.text}>
                Liksom merparten av sina konkurrenter kan man ta både korta och
                långa postioner, och därmed tjäna pengar på både upp och
                nedgångar. Man erbjuder även möjligheten att använda hävstång på
                upp till 101x. 1% uppgång kan på så vis resultera i en
                fördubbling av det satsade kapitalet, men det medför samtidigt
                större risk för förluster.
              </p>
              <p className={articleStyles.text}>
                Det är imponerande vad Phemex lyckats åstadkomma på såpass kort
                tid, och det är uppenbart att man har ambitiösa mål för
                verksamheten. Prestandan hos tradingplattformen ligger på högsta
                nivå och användarupplevelsen likså. Kundtjänsten har också visat
                sig behjälplig och uppfyller våra krav om vad en seriös
                tradingplattform bör erbjuda. Enligt oss har de en ljus framtid
                framför sig och vi ser fram emot att fortsätta använda deras
                tjänster.
              </p>
              <ul>
                <li>
                  <p className={articleStyles.text}>
                    Erfaren och talangfull ledning
                  </p>
                </li>
                <li>
                  <p className={articleStyles.text}>
                    Brett utbud av kryptovalutor
                  </p>
                </li>
                <li>
                  <p className={articleStyles.text}>
                    Hög prestanda och friktionsfri användarupplevelse
                  </p>
                </li>
              </ul>
            </div>
            <a href="https://phemex.com">
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

export default Phemex
