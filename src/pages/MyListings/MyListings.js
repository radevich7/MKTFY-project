import "./MyListings.css";

import { Container, Card, CardBody, Row, Col } from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";
const MyListings = () => {
  const [activeItems, setActiveItems] = useState(true);
  const [soldItems, setSoldItems] = useState(false);
  const toggleActiveItems = () => {
    setActiveItems(true);
    setSoldItems(false);
  };
  const toggleSoldItems = () => {
    setSoldItems(true);
    setActiveItems(false);
  };
  const activeItemsClass = activeItems
    ? "myListings_items active"
    : "myListings_items";
  const soldItemsClass = soldItems
    ? "myListings_items active sold_item"
    : "myListings_items sold_item";

  return (
    <Container fluid className="myListings_container">
      <Card className="border_document_myListings">
        <h1>My Listings</h1>
        <div>
          <span className={activeItemsClass} onClick={toggleActiveItems}>
            Active Items
          </span>
          <span className={soldItemsClass} onClick={toggleSoldItems}>
            <GoPrimitiveDot className="sold_dot" />
            Sold Items
          </span>
        </div>

        {activeItems && (
          <CardBody className="myListings_card">
            <Row>
              <Col lg="4" className="image_myListings">
                <img src={dummy_img} alt="/" />
              </Col>
              <Col className="details_myListings">
                <h5>Microsoft Xbox One X 1TB Console</h5>
                <span>$ {(340).toFixed(2)}</span>
              </Col>
            </Row>
          </CardBody>
        )}
        {soldItems && (
          <CardBody className="myListings_card">
            <Row>
              <Col lg="4" className="image_myListings">
                <img src={dummy_img} alt="/" />
              </Col>
              <Col className="details_myListings">
                <h5>Microsoft Xbox One X 1TB Console</h5>
                <span>$ {(340).toFixed(2)}</span>
              </Col>
            </Row>
          </CardBody>
        )}
        <h2>AVAILABLE ITEMS</h2>

        <CardBody className="myListings_card">
          <Row>
            <Col lg="4" className="image_myListings">
              <img src={dummy_img} alt="/" />
            </Col>
            <Col className="details_myListings">
              <h5>Microsoft Xbox One X 1TB Console</h5>
              <span>$ {(340).toFixed(2)}</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default MyListings;
