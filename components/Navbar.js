import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";
//import { motion } from 'framer-motion';

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

      {/*

      <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}>
        <p className="text-light" style={{
          position: 'absolute',
          background: 'linear-gradient(0deg, rgba(255,141,0,1) 0%, rgba(255,185,0,1) 100%)',
          textAlign: 'center',
          padding: '26px',
          width: '100%',
          fontWeight: '600',
          zIndex: 10
        }}>🚧 —— Welcome, pardon the mess! Our website operates under constant development! Let us know what you think. —— 🚧</p>
      </motion.div>

      */ }

      <p className="text-light" style={{
        position: 'absolute',
        background: 'linear-gradient(0deg, rgba(255,141,0,1) 0%, rgba(255,185,0,1) 100%)',
        textAlign: 'center',
        padding: '26px',
        width: '100%',
        fontWeight: '600',
        zIndex: 10
      }}>🚧 —— Welcome! Please pardon the mess! Our website operates under constant development! Let us know what you think. —— 🚧</p>

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
