import React, { useState } from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

const Header = props => {
  // Set hooks
  const [isOpen, setIsOpen] = useState(false)

  function toggleNav() {
    if (isOpen) {
      setIsOpen(false)
    } else if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <div>
      {props.blogPage ? (
        <>
                 <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
            <NavbarToggler
              onClick={() => {
                toggleNav()
              }}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
              {/* <NavItem>
                  <a href="../#services" style={{ marginRight: `20px` }}>
                   Services
                  </a>
                </NavItem>
                <NavItem>
                  <a href="../" style={{ marginRight: `20px` }}>
                    Contact
                  </a>
                </NavItem> */}
                <NavItem>
                  <a href="/blog" style={{ marginRight: `20px` }}>
                    Blog
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </>
      ) : (
        <>
                  <Navbar color="light" light expand="md">
            <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
            <NavbarToggler
              onClick={() => {
                toggleNav()
              }}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem style={{ marginRight: `20px` }}>
                  <AnchorLink href={"#services"}>
                    {props.servicesLink}
                  </AnchorLink>
                </NavItem>
                <NavItem style={{ marginRight: `20px` }}>
                  <AnchorLink href="#contact">{props.contactLink}</AnchorLink>
                </NavItem>
                <NavItem>
                  <a href="/blog" style={{ marginRight: `20px` }}>
                    Blog
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </>
      )}
    </div>
  )
}
export default Header
