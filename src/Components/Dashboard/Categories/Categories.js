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
} from "reactstrap";
const Categories = () => {
  return (
    <React.Fragment>
      <Col lg="6" className="mb-3 mt-3 p-1">
        <Card className="">
          <CardBody>Categories</CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Categories;
