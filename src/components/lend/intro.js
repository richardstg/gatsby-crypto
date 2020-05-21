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
                De tre bästa platserna att låna ut kryptovalutor [2020]
              </h1>
              <p className={introStyles.date}>Senast uppdaterad: 2020-05-08</p>

              <p className={introStyles.text}>
                Utlåning är en av de senaste trenderna för investerare i
                kryptovalutor. Tidigare kunde man endast välja mellan att hålla
                kryptovalutorna i plånboken eller att aktivt trada. Numera är
                finns det ett tredje alternativ, vilket är att utlåna sina
                kryptovalutor till olika tjänster och därigenom få ränta på sitt
                kryptokapital.
              </p>
              <p className={introStyles.text}>
                Kryptovalutor, som för de flesta är en statisk investering, kan
                nu generera en passiv inkomst. Exakt på samma sätt som inom den
                traditionella finansvärlden. En av de största fördelarna för
                långivarna gentemot de traditionella alternativen är skillnaden
                i ränta. Den som lånar ut kryptovalutor kan i regel räkna med
                att få en avsevärt mycket högre kompensation jämfört med vad som
                skulle fås från en bank. Låntagarna lägger in kryptovalutor som
                säkerhet i utbyte mot ett lån i deras lokala valuta eller någon
                typ av stablecoin. Fördelen för dem är att de t.ex. slipper
                sälja sina kryptovalutor därmed skapa en skattepliktig händelse,
                eller att de kan utnyttja lånet för arbitrage.
              </p>
              <p className={introStyles.text}>
                För den som är intresserad av att låna ut sina kryptovalutor
                finns det ett flertal alternativ. Vi har valt ut tre aktörer som
                vi ser som de främsta på marknaden.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Intro
