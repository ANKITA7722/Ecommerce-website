import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"


const Header=()=>{
    return(
      <>
      <div id='Header'>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="JWELLERY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Long Necklace Sets </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pandant Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Chocker Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Acccessorice</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="COLLECTION" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Long Necklace Sets </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pandant Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Chocker Sets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Acccessorice</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="">READY TO SHIP</Nav.Link>
              <Nav.Link as={Link} to="">GIFT SHOP</Nav.Link>
              <Nav.Link as={Link} to="sale">SALE</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      </>
    )
  }
  export  default Header;