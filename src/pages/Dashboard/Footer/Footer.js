import "./Footer.css";
// import footerImg from "../../../assets/imagesFooter/background_begin.svg";
import { Container, Row, Col, Nav, NavLink } from "reactstrap";
import logo from "../../../assets/img/MKTFY_wordmark.svg";
const Footer = () => {
  return (
    <Container
      fluid
      className="footer_container"
      style={
        {
          // background: `url(${footerImg}) `,
        }
      }
    >
      <Row>
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
                <NavLink className="footer_navlink_header">Jump to</NavLink>
                <NavLink href="/home/account">Account Information</NavLink>
                <NavLink href="/terms&services">Terms & Services</NavLink>
                <NavLink href="#">Privacy Policy</NavLink>
                <NavLink href="#">FAQ</NavLink>
              </Nav>
            </Col>
            <Col lg="6">
              <Nav vertical>
                <NavLink className="footer_navlink_header">MKTFY</NavLink>
                <NavLink style={{ color: "#FFBA00" }} href="#">
                  Contact Us
                </NavLink>
                <NavLink href="#">+1 888 345 6789</NavLink>
                <NavLink href="#">
                  Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7
                </NavLink>
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
