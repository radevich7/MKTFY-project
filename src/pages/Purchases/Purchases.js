import "./Purchases.css";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";
const Purchases = () => {
  return (
    <Container fluid className="purchases_container">
      <Card className="border_document_purchases">
        <h1>My Purchases</h1>
        <span className="total_purchases">2 Items </span>
        <CardBody className="purchases_card">
          <Row>
            <Col lg="4" className="image_purchases">
              <img src={dummy_img} alt="" />
            </Col>
            <Col className="details_purchases">
              <h6>September 07 2020</h6>
              <h5>Microsoft Xbox One X 1TB Console</h5>
              <span>$ {(340).toFixed(2)}</span>
            </Col>
          </Row>
        </CardBody>
        <CardBody className="purchases_card">
          <Row>
            <Col lg="4" className="image_purchases">
              <img src={dummy_img} alt="" />
            </Col>
            <Col className="details_purchases">
              <h6>September 07 2020</h6>
              <h5>Microsoft Xbox One X 1TB Console</h5>
              <span>$ {(340).toFixed(2)}</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Purchases;
