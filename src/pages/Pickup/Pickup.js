import { useEffect, useState } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import { LoadingSpinner } from "../../reusableComponent/Spinner";
import { GET } from "../../api/api";
import "./Pickup.css";

const Pickup = () => {
  const [listing, setLisiting] = useState(null);
  let history = useHistory();

  const { lisningId } = useParams();
  console.log(listing);
  useEffect(() => {
    GET(`/api/listing/${lisningId}/pickup`).then((res) =>
      setLisiting(res.data)
    );
  }, []);
  console.log(history);
  const confirmHandler = () => {
    history.push(`${history.location.pathname}/confirm`);
    // return <Root.Screen options={{ headerShown: false }} />;
  };

  return (
    <>
      {!listing ? (
        <LoadingSpinner />
      ) : (
        <Container fluid className="pickup_container">
          <Card className="border_document_pickup ">
            <div className="page_path">
              <Link to="/home" className="link_home">
                <span>home</span>
              </Link>
              <span className="arrow_path">{">"}</span>
              <Link to={`/post/${lisningId}`} className="link_home">
                <span>product listing</span>
              </Link>
              <span className="arrow_path"> {">"} </span>
              <Link to={`/post/${lisningId}/checkout`} className="link_home">
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
                    src={listing.imageUrl}
                    className="card_image_pickUp"
                    alt="picture of the product.name"
                  />
                </Col>
                <Col className="p-0 listing_details_information ">
                  <h5>{listing.product}</h5>
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
                    <h4>{listing.sellerName}</h4>
                    <span>403-123-4567</span>
                  </div>
                </div>
                <p className="sellers_address">
                  Please pick up your purchase at <mark>{listing.address}</mark>
                  , {listing.region}, Alberta
                </p>
              </div>
              <Button className="contact_seller_button">Contact Seller</Button>
              <Button className="confirm_button" onClick={confirmHandler}>
                Confirm
              </Button>
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Pickup;
