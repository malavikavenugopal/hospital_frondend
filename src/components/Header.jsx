import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <br></br>
      <div style={{ flexWrap: 'nowrap' }} className='d-flex title '>
        <Link to={'/'} style={{ textDecoration: 'none' }} ><h4  style={{ marginLeft: '50px', fontFamily: 'Agbalumo', color: ' rgb(54, 6, 98)' }}>EliteCare Clinic</h4>
        </Link>
       
        <div style={{ marginLeft: '1020px', color: 'rgb(60, 12, 57)', fontSize: '30px' }}>
          <i class="fa-solid fa-phone fa-beat"></i>9232764893
        </div><h6>(Manager)</h6>
        {/* <Button className='rounded-4' style={{marginLeft:'1050px',backgroundColor:'rgb(60, 12, 57)',color:'white' }} variant="outline-dark">Book an Appointment</Button>
 */}</div>
      <br></br>

      <Navbar expand="lg" className="" style={{ backgroundColor: " rgb(54, 6, 98)" }}>

        <Container>
          {/*        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
            <Nav.Link className='titlehead' style={{ color: "white",display:'hide',fontFamily: 'Agbalumo'}} >EliteCare Clinic
        </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/">HOME</Nav.Link>

              <Nav.Link style={{ color: "white" }} href="/department">DEPARTMENTS</Nav.Link>

              <Nav.Link style={{ color: "white" }} href="/patients">PATIENTS</Nav.Link>
              {/*   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header