import React from "react";

import "../Dashboard.css";
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
const Categories = (props) => {
  return (
    <React.Fragment>
      <Col lg="6" className="mb-3 mt-3 p-1">
        <Card className="">
          <CardBody>
            {" "}
            <span className="container_title">Shop Electronics</span>
            <Row className="scroll_effect">
              {props.items.map((item) => (
                <Col lg="4" key={item.id} className="column_categories">
                  <Card className="mt-0 border-0 ">
                    <CardBody className="categories_card p-0 border-0">
                      {/* Content of the card */}
                      <div className="image_deals_container">
                        <CardImg
                          top
                          src={item.image}
                          alt={`The image shows ${item.title}`}
                          className="image_deals"
                        />
                      </div>

                      {/* end card */}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <span className="explore_link_button link b-0">Explore Now</span>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Categories;
