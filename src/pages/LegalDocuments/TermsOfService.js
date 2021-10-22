import { Container, Card, CardBody } from "reactstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import "./LegalDocuments.css";
import logo from "../../assets/login_page/logo.svg";

const TermsOfService = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(history, location);
  const goBack = () => {
    history.goBack();
  };
  return (
    <Container fluid className="terms_container">
      <div className="terms_background">
        <img src={logo} alt="Logo of the company" className="company_logo" />
      </div>

      <Card className="terms_card">
        <CardBody className="terms_cardBody">
          {/* <div className="backArrow_terms" onClick={goBack}>
            <FaArrowLeft />
          </div> */}
          <h1>MKTFY Terms & Services</h1>
          <p>
            These Terms of Service constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and [business entity name] (“we,” “us” or “our”), concerning your
            access to and use of the [website name.com] website as well as any
            other media form, media channel, mobile website or mobile
            application related, linked, or otherwise connected thereto
            (collectively, the “Site”).
          </p>
          <p>
            You agree that by accessing the Site, you have read, understood, and
            agree to be bound by all of these Terms of Service. If you do not
            agree with all of these Terms of Service, then you are expressly
            prohibited from using the Site and you must discontinue use
            immediately.
          </p>
          <p>
            Supplemental Terms of Service or documents that may be posted on the
            Site from time to time are hereby expressly incorporated herein by
            reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Service at any time and
            for any reason.
          </p>
          <p>
            We will alert you about any changes by updating the “Last updated”
            date of these Terms of Service, and you
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default TermsOfService;
