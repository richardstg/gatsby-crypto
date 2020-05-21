import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

import headerStyles from "./header.module.scss"
import LandingPageSVG from "./svg/landingPageSVG"

const autoHideNav = elementId => {
  /* Auto hide the navbar when scrolling down */
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight
      let currentScrollPos = window.pageYOffset
      if (
        (maxScroll > 0 &&
          prevScrollpos > currentScrollPos &&
          prevScrollpos <= maxScroll) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0) ||
        currentScrollPos === 0
      ) {
        document.getElementById(elementId).style.top = "0"
      } else {
        document.getElementById(elementId).style.top = "-5.0rem"
      }
      prevScrollpos = currentScrollPos
    }
  }
}

const Header = props => {
  // Autohide the navbar when scrolling down
  autoHideNav("navbar")

  // Toggle hamburger menu
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // Change classes for navbar depending on if it's at the top or scrolled down
  const [offset, setOffset] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY > 0)
    }
    document.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <Navbar
      className={offset ? headerStyles.navbarDown : headerStyles.navbarUp}
      fixed="top"
      light
      expand="lg"
      id="navbar"
    >
      <NavbarBrand className={headerStyles.navbarBrand} href="/">
        <LandingPageSVG className={headerStyles.logo} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className={headerStyles.NavItem}>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/"
            >
              Hem
            </Link>
          </NavItem>
          <NavItem className={headerStyles.NavItem}>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/kopa"
            >
              Köpa
            </Link>
          </NavItem>
          <NavItem className={headerStyles.NavItem}>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/trading"
            >
              Trading
            </Link>
          </NavItem>
          <NavItem className={headerStyles.NavItem}>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/planbocker"
            >
              Plånböcker
            </Link>
          </NavItem>
          <NavItem className={headerStyles.NavItem}>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/utlaning"
            >
              Utlåning
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
