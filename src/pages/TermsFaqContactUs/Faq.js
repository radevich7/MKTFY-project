import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../store/app-context";

import {
  Collapse,
  CardBody,
  Card,
  CardHeader,
  Container,
  Col,
  Row,
} from "reactstrap";
import { FaCaretRight } from "react-icons/fa";

const Faq = () => {
  const [store, dispatch] = useContext(AppContext);
  const [toggleQuestion, setToggequestion] = useState();

  return (
    <Container fluid className="faq_container">
      <Card className="border_document_faq">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>FAQ</span>
        </div>
        <h1>Frequently Asked Questions</h1>
        <Row className="faq_row_container">
          <Col lg="4" md="6" className="faq_hints">
            {store.faq.map((item) => (
              <Row key={item.id}>
                <CardHeader
                  onClick={() => setToggequestion(item.id)}
                  className={toggleQuestion === item.id ? "active_item" : ""}
                >
                  <span>{item.question}?</span>
                  <span className="faq_caret">
                    <FaCaretRight />
                  </span>
                </CardHeader>
              </Row>
            ))}
          </Col>

          <Col lg="8" md="6" className="text_container">
            {store.faq.map((item) => (
              <Collapse
                key={item.id}
                isOpen={toggleQuestion === item.id ? true : false}
              >
                <CardBody className="cardBody_text">
                  <h2>{item.question}?</h2>
                  <p>{item.answer}</p>
                </CardBody>
              </Collapse>
            ))}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Faq;
