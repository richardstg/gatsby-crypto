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
                De tre bästa plånböckerna för kryptovalutor [2020]
              </h1>
              <p className={introStyles.date}>Senast uppdaterad: 2020-05-08</p>

              <p className={introStyles.text}>
                Kryptoplånböcker är skapade för att förvara dina tillgångar på
                ett säkert sätt. Valet av plånbok är därmed ett av de viktigaste
                man ställs inför vid investering i kryptovalutor. Då utbudet på
                marknaden är stort så är det enkelt att hitta alternativ. Det
                kan dock vara svårt att veta vilken plånbok som är bäst för ens
                egen situation.
              </p>
              <p className={introStyles.text}>
                När man först börjar investera är det vanligt att man använder
                sig av en mjukvaruplånbok, alternativt att man förvarar dem i
                sin plånbok kopplad till pålitliga kryptobörser som Coinbase,
                Bitpanda och Kraken. Man ska dock vara medveten om att
                mjukvaruplånböcker och kryptobörser kan utsättas för
                hackerattacker. För att vara så säker som möjligt bör man därmed
                ta kontrollen över sina egna tillgångar och se sig om efter en
                hårdvaruplånbok.
              </p>
              <p className={introStyles.text}>
                I det här avsnittet rekommenderar vi tre olika kryptoplånböcker,
                två hårdvaruplånböcker och en mjukvaruplånbok. Vi anser att
                dessa tillhör de absolut bästa och säkraste alternativen för
                förvaring av kryptovalutor.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Intro
