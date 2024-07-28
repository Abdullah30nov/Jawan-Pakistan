import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/JWPImages/logo.png'
import style from '../Header/Header.module.css'
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="" className={style.img}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: 'auto' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><b>Home</b></Nav.Link>
            <Nav.Link href="#action2"><b>About us</b></Nav.Link>
            <NavDropdown title={<b>Training</b>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><b>Training</b></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
            <b>Contact us</b>
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;