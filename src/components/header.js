import React, { useState } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Header = (props) => {
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            toggleNav()
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Header
