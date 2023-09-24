import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";

// Borrowing TSE's function for navbar items:
// https://github.com/TritonSE/tritonse.github.io/blob/main/components/Navbar.tsx
function NavbarItem(props) {
  return (
    <Nav.Item as="li">
      <Link href={props.href} passHref>
        <Nav.Link className="px-2 px-lg-4 py-3">{props.children}</Nav.Link>
      </Link>
    </Nav.Item>
  );
}

export default function MyNavbar() {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand className="py-2">
          <Link href="/" passhref>
            <a style={{ position: "relative", top: "3px" }}>
              <Image
                alt="Skyline College Computer Science Club Logo"
                src="/assets/imgs/phonto.png"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse className="ms-auto justify-content-end" id="navbar">
          <Nav as="ul">
            <NavbarItem href="#about">About</NavbarItem>
            <NavbarItem href="#projects">Projects</NavbarItem>
            <NavbarItem href="#recruitment">Recruitment</NavbarItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
