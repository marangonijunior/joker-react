import React, { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

import './top.scss';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Navbar className="top" collapseOnSelect="true" expand="false" bg="dark" variant="dark" data-test="top">
        <Navbar.Brand>
          Joker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavDropdown.Item href="/home">
            <FontAwesomeIcon icon={faHome} />
            <span> Home </span>
          </NavDropdown.Item>
          <NavDropdown.Item href="/search">
            <FontAwesomeIcon icon={faSearch} />
            <span> Search by name </span>
          </NavDropdown.Item>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Top;