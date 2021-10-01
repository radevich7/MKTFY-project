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
      <Col lg="12">
        <Card>
          <CardBody>
            <span className="container_title">Deals for you</span>
            <Row className="scroll_effect">
              {props.items.map((item) => (
                <Col lg="2" key={item.id} className="column_deals">
                  <Card className="mt-0 border-0 ">
                    <CardBody className="deals_card p-0 border-0">
                      {/* Content of the card */}
                      <div className="image_deals_container">
                        <CardImg
                          top
                          src={item.image}
                          alt={`The image shows ${item.title}`}
                          className="image_deals"
                        />
                      </div>
                      <CardTitle tag="h5" className="deals_title">
                        {item.title}
                      </CardTitle>
                      <CardSubtitle tag="h6" className="deals_price">
                        $ {item.price.toFixed(2)}
                      </CardSubtitle>
                      {/* end card */}
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
