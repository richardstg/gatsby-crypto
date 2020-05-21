import React from "react"
import { Container, Row, Col } from "reactstrap"

import faqStyles from "./faq.module.scss"

const Faq = () => {
  return (
    <Container className={faqStyles.outerWrapper} fluid>
      <Container className={faqStyles.innerWrapper}>
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <h1 className={faqStyles.title}>FAQ</h1>
            <h4>Hur utvärderar ni tjänsterna?</h4>
            <p className={faqStyles.text}>
              Vi utvärderar tjänsterna genom att pröva använda dem själva samt
              genom research med utgångspunkt utifrån hur de upplevs av andra.
            </p>
            <h4>
              Vilka garantier kan ni ge rörande tjänsterna som presenteras?
            </h4>
            <p className={faqStyles.text}>
              Genom vår research har vi identifierat de tjänster som enligt oss
              är de bästa. Detta är tjänster som vi föredrar att använda. Några
              garantier kan vi dock inte lämna, och som vanligt bör man göra sin
              egen research innan man fattar ett beslut rörande investering av
              sina pengar.
            </p>
            <h4>Hur stora summor bör man investera i kryptovalutor?</h4>
            <p className={faqStyles.text}>
              Detta beror på ens egen situation och riskprofil. En del
              investerar en stor del av sina totala tillgångar, medan andra
              någon enstaka procent. En bra tumregel är att aldrig investera mer
              än vad man har råd att förlora. I övrigt lämnar vi inga
              rekommendationer kring detta.
            </p>
            <h4>Kan man köpa kryptovalutor av er?</h4>
            <p className={faqStyles.text}>
              Nej, vi varken säljer eller förvarar kryptovalutor. Vi utvärderar
              endast tjänster och presenterar de som vi värderar högst.
            </p>
            <h4>Vilka kryptovalutor bör man investera i?</h4>
            <p className={faqStyles.text}>
              Vi ger inga rekommendationer rörande vilka kryptovalutor som
              eventuellt kan ge högre avkastning än andra. Vårt mål är att ge
              hjälp rörande vilka kryptotjänster som är bäst.
            </p>
            <h4>
              Vilka garantier finns för att ens kryptoinvesteringarna kommer bli
              lönsamma?
            </h4>
            <p className={faqStyles.text}>
              Det finns aldrig några garantier när man investerar. Alla
              investeringar medför risker, och man måste själv göra sin research
              innan man investerar.
            </p>
            <h4>Är mina tillgångar säkra på kryptobörser?</h4>
            <p className={faqStyles.text}>
              Att förvara sina kryptovalutor på börser är inget som
              rekommenderas och den allra säkraste förvaringen är
              hårdvaruplånböcker. Om man vill förvara dem på en börs bör man
              göra det på en som är seriös och pålitlig. Det är dock
              rekommenderat att se sig om efter en hårdvaruplånbok i ett så
              tidigt skede som möjligt.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Faq
