import "./LegalDocuments.css";
import { Container, Card, CardBody } from "reactstrap";
// import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/login_page/logo.svg";

const PrivacyPolicy = (props) => {
  return (
    <Container fluid className="terms_container">
      <div className="terms_background">
        <img src={logo} alt="Logo of the company" className="company_logo" />
      </div>
      <Card className="terms_card">
        <CardBody className="privacy_cardBody">
          {/* <div className="backArrow_terms">
            <FaArrowLeft />
          </div> */}
          <h1>MKTFY Privacy Policy</h1>
          <p>
            Privacy is the ability of an individual or group to seclude
            themselves or information about themselves, and thereby express
            themselves selectively. <br />
            When something is private to a person, it usually means that
            something is inherently special or sensitive to them. The domain of
            privacy partially overlaps with security, which can include the
            concepts of appropriate use, as well as protection of information.
            Privacy may also take the form of bodily integrity. The right not to
            be subjected to unsanctioned invasions of privacy by the government,
            corporations or individuals is part of many countries’ privacy laws,
            and in some cases, constitutions.
            <br /> In the business world, a person may volunteer personal
            details, including for advertising, in order to receive some sort of
            benefit. Public figures may be subject to rules on the public
            interest. Personal information which is voluntarily shared but
            subsequently stolen or misused can lead to identity theft.
            <br /> The concept of universal individual privacy is a modern
            concept primarily associated with Western culture, British and North
            American in particular, and remained virtually unknown in some
            cultures until recent times. Most cultures, however, recognize the
            ability of individuals to withhold certain parts of their personal
            information from wider society, such as closing the door to one’s
            home.
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;
