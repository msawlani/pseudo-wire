import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  Button,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { Dropdown } from "reactstrap";
import "./Header.css";
import Code from "../../Shared/Data/Code.json";

const Header = () => {
  let language = Code.Languages.map((data) => data);
  console.log(language.title);
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
          <NavDropdown title="Learn" id="link">
            {Code.Languages.map((data) => (
              <NavLink href={`/${data.title}`}>{data.title}</NavLink>
            ))}
          </NavDropdown>
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
