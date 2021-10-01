import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
import "../Dashboard.css";

const Deals = (props) => {
  return (
    <React.Fragment>
      <Col lg="12" className="">
        <Card>
          <CardBody className="">
            <span>Deals for you</span>
            <Row className="scroll_effect">
              {props.items.map((item) => (
                <Col lg="2" key={item.id} className="column_categories">
                  <Card className="mt-0 border-0">
                    <CardBody className="deals_card p-0">
                      <CardTitle tag="h5">{item.name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 ">
                        {item.price}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Deals;
