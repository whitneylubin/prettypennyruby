import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';




class Nav extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }

    render() {
      const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
        return (
          <Router>
            <div>
              <Navbar dark expand="md" fixed="top" scrolling>
                <Container>
                  <NavbarBrand>
                    <span className="white-text">PrettyPenny</span>
                  </NavbarBrand>
                  <NavbarToggler onClick = { this.onClick } />
                  <Collapse isOpen = {this.state.collapse} navbar>
                    <NavbarNav left>
                      <NavItem>
                        <NavLink to="#!">Find Offers</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">How It Works</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">My Offers</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#!">Contact</NavLink>
                      </NavItem>
                    </NavbarNav>
                    <NavbarNav right >
                      <NavItem>
                        <NavLink to="!#">
                          <Fa icon="facebook"></Fa>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="!#">
                          <Fa icon="twitter"></Fa>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="!#">
                          <Fa icon="instagram"></Fa>
                        </NavLink>
                      </NavItem>
                    </NavbarNav>
                  </Collapse>
                </Container>
              </Navbar>
            { this.state.collapse && overlay}
            </div>
          </Router>
        );
    }
}

export default Nav;
