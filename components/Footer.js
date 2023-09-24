import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import Link from "next/link";

// Borrowing TSE's functions for creating footer items with icons:
// https://github.com/TritonSE/tritonse.github.io/blob/main/components/Footer.tsx
// ========================================================
function FooterItem(props) {
  const external = props.href.indexOf(":") >= 0;
  return (
    <Nav.Item>
      {external ? (
        <Nav.Link
          style={{ textDecoration: "none", color: "inherit" }}
          href={props.href}
          target="_blank"
        >
          {props.children}
        </Nav.Link>
      ) : (
        <Link href={props.href} passHref>
          <Nav.Link>{props.children}</Nav.Link>
        </Link>
      )}
    </Nav.Item>
  );
}

function FooterIcon(props) {
  return (
    <FooterItem href={props.href}>
      <props.icon style={{ color: "#000000" }} size="2em" />
    </FooterItem>
  );
}
// ========================================================

// Source for footer design: https://gist.github.com/Luke-zhang-04/7cb523899ca4044f805f0d0909e4c5c1
export default function Footer() {
  return (
    <div className="bg-light" id="footer">
      <Container className="bg-light">
        <footer className="page-footer font-small pt-4">
          <Container fluid className="text-center">
            <Row>
              <Col md={6} className="mt-md-0 mt-3">
                <Link href="/" passHref>
                  <a style={{ position: "relative", top: "3px" }}>
                    <Image
                      alt="Skyline College Computer Science Club Logo"
                      src="/assets/imgs/phonto.png"
                      width={100}
                      height={100}
                    />
                  </a>
                </Link>
                <Link href="https://www.skylinecollege.edu/" passHref>
                  <a style={{ position: "relative", top: "3px" }}>
                    <Image
                      alt="Skyline College Logo"
                      src="/assets/imgs/skyline_logo.png"
                      width={150}
                      height={100}
                    />
                  </a>
                </Link>
                <Container>
                  <Row className="py-4 d-flex justify-content-center">
                    <Col sm md={3} lg={2} className="py-3 py-lg-0">
                      <FooterIcon
                        icon={FaEnvelope}
                        href="mailto:skylinecompsciclub@gmail.com"
                      />
                    </Col>
                    <Col sm md={3} lg={2} className="py-3 py-lg-0">
                      <FooterIcon
                        icon={FaGithub}
                        href="https://github.com/Skyline-College-Computer-Science-Club"
                      />
                    </Col>
                    {/* <Col sm md={3} lg={2} className="py-3 py-lg-0">
                      <FooterIcon
                        icon={FaInstagram}
                        href="https://instagram.com"
                      />
                    </Col>
                    <Col sm md={3} lg={2} className="py-3 py-lg-0">
                      <FooterIcon
                        icon={FaLinkedin}
                        href="https://www.linkedin.com"
                      />
                    </Col> */}
                    <Col sm md={3} lg={2} className="py-3 py-lg-0">
                      <FooterIcon
                        icon={FaDiscord}
                        href="https://discord.gg/FSK2uCUX"
                      />
                    </Col>
                  </Row>
                </Container>
              </Col>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <Col md={3} className="mb-md-0 mb-3">
                <h5 className="text-uppercase">General</h5>
                <ul className="list-unstyled">
                  <li>
                    <FooterItem href="#about">About</FooterItem>
                  </li>
                  <li>
                    <FooterItem href="#projects">Projects</FooterItem>
                  </li>
                </ul>
              </Col>

              <Col md={3} className="mb-md-0 mb-3">
                <h5 className="text-uppercase">Join Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <FooterItem href="#recruitment">Recruitment</FooterItem>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="text-center py-3">
            <p id="copyright-message">{`© Copyright ${new Date().getFullYear()} Skyline College Computer Science Club.`}</p>
          </div>
        </footer>
      </Container>
    </div>
  );
}
