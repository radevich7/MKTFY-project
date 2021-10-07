import "./Listing.css";
import { useParams, useRouteMatch } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import logo_listing_user from "../../assets/listing_logo.svg";

const Listing = () => {
  return (
    <Container fluid className="listing_container">
      <Card className="border_document_listing">
        <CardBody>
          <Row className="w-100" className="border">
            {/* First column -carousel*/}

            <Col>
              <Row>
                <Col lg="2" className="border">
                  Hello
                </Col>
                <Col lg="10" className="border">
                  Hello2
                </Col>
              </Row>
            </Col>

            {/* Second column - item details*/}

            <Col className="border">
              <Card className="item_details_card">
                <CardBody>
                  <Col>
                    <h2>Microsoft Xbox One X 1TB Console</h2>
                  </Col>
                  <Col>
                    <span>$ 340</span>
                  </Col>
                  <Col>
                    <button className="item_details_button">
                      I want this!
                    </button>
                  </Col>
                  <Col>
                    <h3>Details</h3>
                  </Col>
                  <Col>
                    <p>
                      The world’s most powerful console. The most powerful
                      console ever, featuring 6 Teraflops of graphical
                      processing power, true 4K gaming, and compatibility with
                      Xbox One games and accessories.
                    </p>
                  </Col>
                  <Col>
                    <div className="sellers_info">
                      <div className="seller_logo">
                        <span>M</span>
                      </div>
                      <span>
                        <h4>Matt Smith </h4>
                        <div className="sellers_number_of_listings">
                          <img src={logo_listing_user} alt="/" />
                          <div>
                            <h4>2</h4>
                            <h5>listings</h5>
                          </div>
                        </div>
                      </span>
                    </div>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Listing;
