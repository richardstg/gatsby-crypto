import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"

import classes from "./header.module.scss"
import HeaderLogoSVG from "./svg/headerLogoSVG"
import Backdrop from "./shared/UI/Backdrop/Backdrop"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOffset, setIsOffset] = useState(null)
  const [hideNav, setHideNav] = useState(false)

  const previousScrollPosition = useRef(0)

  const toggle = () => setIsOpen(!isOpen)

  const handleOffset = () => {
    setIsOffset(window.scrollY > 0)
  }

  const handleHideNav = () => {
    if (
      previousScrollPosition.current < window.scrollY &&
      window.scrollY > 100
    ) {
      setHideNav(true)
      setIsOpen(false)
    } else {
      setHideNav(false)
    }
    previousScrollPosition.current = window.scrollY
  }

  useEffect(() => {
    document.addEventListener("scroll", handleOffset)
    document.addEventListener("scroll", handleHideNav)
  }, [])

  return (
    <React.Fragment>
      <Navbar
        className={`${classes.navbar} ${
          !isOffset && props.indexPage ? classes.up : classes.down
        } ${!props.indexPage ? classes.down : classes.up}`}
        fixed="top"
        light
        expand="lg"
        id="navbar"
        style={{ top: `${hideNav ? "-5rem" : "0"}` }}
      >
        <Link aria-label="Hem" className={classes.navbarBrand} to="/">
          <HeaderLogoSVG className={classes.logo} />
        </Link>
        <NavbarToggler
          className={`${classes.toggler} ${isOpen && classes.open}`}
          onClick={toggle}
        >
          <div className={classes.icon}></div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={classes.NavItem}>
              <Link
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
                to="/"
              >
                Hem
              </Link>
            </NavItem>
            <NavItem className={classes.NavItem}>
              <Link
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
                to="/kopa/"
              >
                Köpa
              </Link>
            </NavItem>
            <NavItem className={classes.NavItem}>
              <Link
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
                to="/trading/"
              >
                Trading
              </Link>
            </NavItem>
            <NavItem className={classes.NavItem}>
              <Link
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
                to="/planbocker/"
              >
                Plånböcker
              </Link>
            </NavItem>
            <NavItem className={classes.NavItem}>
              <Link
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
                to="/utlaning/"
              >
                Utlåning
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {isOpen && <Backdrop show onClick={() => setIsOpen(false)} />}
    </React.Fragment>
  )
}

export default Header
