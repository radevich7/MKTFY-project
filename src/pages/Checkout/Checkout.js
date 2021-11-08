import "./Checkout.css";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";

const Checkout = () => {
  const { lisningId } = useParams();

  let match = useRouteMatch();

  return (
    <Container fluid className="checkout_container">
      <Card className="border_document_checkout">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path">{">"}</span>
          <Link to={`/post/${lisningId}`} className="link_home">
            <span>product listing</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>Checkout</span>
        </div>
        <CardBody className="checkout_card">
          <h4>Checkout</h4>
          <Row>
            <Col className="listing_details_img">
              <img
                src={dummy_img}
                alt="picture of the product.name"
                style={{ height: "125px" }}
              />
            </Col>
            <Col className="p-0 listing_details_information ">
              <h5>Microsoft Xbox One X 1TB Console</h5>
              <span>$ {(340).toFixed(2)}</span>
            </Col>

            <div className="price_card">
              <h5>Total</h5>
              <span>$ {(340).toFixed(2)}</span>
            </div>
            <Link to={`${match.url}/pickupConfirmation`}>
              <Button className="checkout_button">Place your order</Button>
            </Link>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Checkout;
