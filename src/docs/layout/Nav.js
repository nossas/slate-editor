import React from 'react';
import { Link } from 'react-router';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const LayoutNav = ({title, gh}) => {
  return (
    <Navbar className="header" color="faded" light>
      <Container fluid>
        <NavbarBrand tag={Link} to="/">{title}</NavbarBrand>
        <Nav className="nav navbar-nav pull-xs-right">
          <NavItem>
            <NavLink tag={Link} className="nav-link" to="/documentation" activeClassName="active">Documentation</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={`https://github.com/${gh}`}>Github</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default LayoutNav;
