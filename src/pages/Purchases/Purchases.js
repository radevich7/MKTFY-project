import { Container, Card, CardBody, Row, Col } from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";
import { GET } from "../../api/api";
import "./Purchases.css";
import { useEffect, useState } from "react";

const Purchases = () => {
  const [purhases, setPurhases] = useState(null);
  console.log(purhases);
  useEffect(() => {
    GET("/api/mypurchases").then((res) => {
      if (!res.failed) {
        console.log(res.data);
        setPurhases(res.data);
      }
    });
  }, []);
  return (
    <Container fluid className="purchases_container">
      <Card className="border_document_purchases">
        <h1>My Purchases</h1>
        <span className="total_purchases">2 Items</span>
        <CardBody className="purchases_card">
          {/* {purhases.map((item) => ( */}
          <Row>
            <Col lg="4" className="image_purchases">
              <img src={dummy_img} alt="/" />
            </Col>
            <Col className="details_purchases">
              <h6>September 07 2020</h6>
              <h5>Microsoft Xbox One X 1TB Console</h5>
              <span>$ {(340).toFixed(2)}</span>
            </Col>
          </Row>
          {/* ))} */}
        </CardBody>
      </Card>
    </Container>
  );
};

export default Purchases;
