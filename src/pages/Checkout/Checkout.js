import { useState, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import Button from "../../reusableComponent/Button";
import { GET } from "../../api/api";
import { LoadingSpinner } from "../../reusableComponent/Spinner";
import noimage from "../../assets/noimage.png";
import "./Checkout.css";

const Checkout = () => {
  const [listing, setListing] = useState(null);
  let match = useRouteMatch();
  const id = useParams();
  const listingId = Object.values(id).toString();

  useEffect(() => {
    let mount = true;
    GET(`/api/listing/${listingId}/seller`).then((res) => {
      console.log(res.data);
      if (res.failed === false) {
        setListing(res.data);
      }
    });
    return () => {
      mount = false;
    };
  }, []);

  return (
    <>
      {!listing ? (
        <LoadingSpinner />
      ) : (
        <Container fluid className="checkout_container">
          <Card className="border_document_checkout">
            <div className="page_path">
              <Link to="/home" className="link_home">
                <span>home</span>
              </Link>
              <span className="arrow_path">{">"}</span>
              <Link to={`/post/${listingId}`} className="link_home">
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
                    src={
                      listing.images.length > 0
                        ? listing.images[0].url
                        : noimage
                    }
                    alt="picture of the product.name"
                    className="card_image"
                  />
                </Col>
                <Col className="p-0 listing_details_information ">
                  <h5>{listing.product}</h5>
                </Col>

                <div className="price_card">
                  <h5>Total</h5>
                  <span>$ {listing.price.toFixed(2)}</span>
                </div>
                <Link to={`${match.url}/pickupConfirmation`}>
                  <Button className="checkout_button">Place your order</Button>
                </Link>
              </Row>
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Checkout;
