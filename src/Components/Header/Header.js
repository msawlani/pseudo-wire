import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  Button,
  Container,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="Navbar">
      <Container>
        <NavbarBrand href="/" className="link">
          Pseudo Wire
        </NavbarBrand>
        <Nav className="me-auto">
          <NavLink href="/" className="link">
            Home
          </NavLink>
          <NavLink href="/learn" className="link">
            Learn
          </NavLink>
          <NavLink href="/about" className="link">
            About
          </NavLink>
          <NavLink href="/contact" className="link">
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
