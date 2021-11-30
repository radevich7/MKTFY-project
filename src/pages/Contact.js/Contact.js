import { Link } from "react-router-dom";
import { Container, Card } from "reactstrap";
import React from "react";

import "./Contact.css";

const Contact = () => {
  const mailto = <a href="mailto:[email protected]"></a>;
  return (
    <Container fluid className="contact_container">
      <Card className="border_document_contact ">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>

          <span className="arrow_path"> {">"} </span>
          <span>Contact Us</span>
        </div>
      </Card>

      <ButtonMailto label="Email Us" mailto="mailto:contact-us@mktfy.ca" />
    </Container>
  );
};

export default Contact;

export const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="contact_us"
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};
