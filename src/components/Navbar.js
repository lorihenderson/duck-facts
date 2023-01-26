import { Container, Navbar as NavbarJS, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {

    return (
        <>
        <NavbarJS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    &nbsp;
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    &nbsp;
                    <Nav.Link to="/profile" as={NavLink}>Profile</Nav.Link>
                </Nav>
            </Container>
        </NavbarJS>
        </>

    )
}