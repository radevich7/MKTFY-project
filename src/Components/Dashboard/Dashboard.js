import React from "react";
import { Container, Row, Col } from "reactstrap";
import Categories from "./Categories/Categories";
import Deals from "./Deals/Deals";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard_container">
      <Row className="border_document_dashboard">
        <Deals />
        <Categories />
        <Categories />
        <Deals />
        <Categories />
        <Categories />
        <Deals />
        <Categories />
        <Categories />
      </Row>
    </Container>
  );
};

export default Dashboard;
