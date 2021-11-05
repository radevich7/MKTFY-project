import React from "react";

import "../Dashboard.css";
import { Card, CardImg, CardBody, Col, Row } from "reactstrap";
const Categories = (props) => {
  return (
    <React.Fragment>
      <Col className={`mb-4 mt-4 ${props.hide} xl-6 lg-12`}>
        <Card>
          <CardBody className="">
            <span className="container_title">Shop Electronics</span>
            <Row className="space-between">
              {props.items.map((item) => (
                <Col lg="4" key={item.id} className="column_categories p-0 ">
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
