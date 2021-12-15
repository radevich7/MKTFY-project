import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "reactstrap";
import logo from "../../../assets/img/MKTFY_wordmark.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer_container ">
      <Row className="d-none d-lg-flex">
        <Col lg="3" className="footer_logo_container">
          <img src={logo} alt="logo of the MKTFY" />
          <span>
            Here at MKTFY we are human centric. We believe the stuff we buy,
            share and give are the backbone of our society — and we hope to
            ensure that we do this in a conscious way.
          </span>
        </Col>

        <Col lg="4" className="footer_nav_container">
          <Row>
            <Col lg="6">
              <Nav vertical>
                <span className="footer_navlink_header disabled-link">
                  Jump to
                </span>
                <Link to="/home/account">Account Information</Link>
                <Link target="_blank" to="/terms&services">
                  Terms & Services
                </Link>
                <Link target="_blank" to="/privacy">
                  Privacy Policy
                </Link>

                <Link to="/home/faq">FAQ</Link>
              </Nav>
            </Col>
            <Col lg="6">
              <Nav vertical>
                <span className="footer_navlink_header">MKTFY</span>
                <Link style={{ color: "#FFBA00" }} to="#">
                  Contact Us
                </Link>
                <Link to="#">+1 888 345 6789</Link>
                <Link to="#">
                  Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7
                </Link>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="horizontal" />
      <footer className="copyright_notice">
        Copyright @Launchpad by Vog 2021
      </footer>
    </Container>
  );
};

export default Footer;
