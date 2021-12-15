import React from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "reactstrap";
import "./Contact.css";

const Contact = () => {
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
  // BY CLICKING THE BUTTON, PAGE WILL REDIRECT OT SEND THE EMAIL
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
