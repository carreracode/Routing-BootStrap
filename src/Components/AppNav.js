import logo from '../logo.svg'
import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom"
import{Navbar,NavDropdown,CardColumns,Button,Nav,Container,FormControl,Form} from "react-bootstrap"


function AppNav(){
    return (
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    The Toons 
    </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/home">Home</Link>
      <Nav.Link href="/about">About</Nav.Link>
      <NavDropdown title="Other Areas" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  )
  }


export default  AppNav