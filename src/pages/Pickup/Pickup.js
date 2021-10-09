import "./Pickup.css";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";

const Pickup = () => {
  const { id } = useParams();

  return (
    <Container fluid className="pickup_container">
      <Card className="border_document_pickup ">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path">{">"}</span>
          <Link to={`/post/${id}`} className="link_home">
            <span>product listing</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <Link to={`/post/${id}/checkout`} className="link_home">
            <span>Checkout</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>Pickup Information</span>
        </div>
        <CardBody className="pickup_card ">
          <h4>Pickup Information</h4>
          <Row className="listing_details m-0">
            <Col lg="6" className="listing_details_img">
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
          </Row>

          <div className="pickup_seller_information">
            <div className="sellers_info">
              <span className="pickup_text">Pick up</span>
              <div className="seller_logo">
                <span>M</span>
              </div>
              <div className="sellers_info_details">
                <h4>Matt Smith</h4>
                <span>403-123-4567</span>
              </div>
            </div>
            <p className="sellers_address">
              Please pick up your purchase at <mark>12 12ave SW</mark>, Calgary,
              Alberta
            </p>
          </div>
          <Button className="contact_seller_button">Contact Seller</Button>
          <Button className="confirm_button">Confirm</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Pickup;
