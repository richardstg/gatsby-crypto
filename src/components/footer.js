import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container className={footerStyles.navContainer}>
        <Row>
          <Col xs={12} md={{ size: 4, offset: 0 }}>
            <h6>Om CryptoHelper</h6>
            <p>
              Vår ambition är att utbilda och hjälpa människor göra bättre val
              gällande investering och hantering av kryptovalutor. Genom att
              informera om de bästa tjänsterna och produkterna hoppas vi att du
              ska kunna navigera rätt och undvika de vanligaste fallgroparna.
            </p>
          </Col>
          <Col xs={12} md={{ size: 2, offset: 1 }}>
            <h6>Navigation</h6>
            <ul className={footerStyles.footerNav}>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/"
                >
                  Hem
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/kopa/"
                >
                  Köpa
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/trading/"
                >
                  Trading
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/planbocker/"
                >
                  Plånböcker
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/utlaning/"
                >
                  Utlåning
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={{ size: 2, offset: 1 }}>
            <h6>Info</h6>
            <ul className={footerStyles.footerNav}>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/faq/"
                >
                  FAQ
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/kontakt/"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ size: 4, offset: 0 }}>
            <p className={footerStyles.copyright}>&copy; CryptoHelper 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
