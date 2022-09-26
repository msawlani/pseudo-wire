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
import { connect } from "react-redux";


const Header = (props) => {
  let language = Code.Languages.map((data) => data);
  console.log(language.title);
  console.log(props.links);
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
            {props.links.map((data) => (
              <NavLink href={`/${data.id}`}>{data.language}</NavLink>
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
const mapStateToProps = (state) => {
  return {
  links: state.links
}
}

export default connect(mapStateToProps)(Header);
