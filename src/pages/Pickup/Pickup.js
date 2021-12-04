import { useEffect, useState } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import { LoadingSpinner } from "../../reusableComponent/Spinner";
import { GET, PUT } from "../../api/api";
import "./Pickup.css";

const Pickup = () => {
  const [listing, setLisiting] = useState(null);
  const [purchased, setPurchased] = useState();
  const [pendingItem, setPendingItem] = useState();
  const { lisningId } = useParams();
  let history = useHistory();

  // Passed through the router history the state to check if the item is sold in order to remove button from the UI

  //

  // STATUS OF THE LISTING, if pending don't show the butoon to buy.

  useEffect(() => {
    if (history.location.state) {
      setPurchased(history.location.state.purchased);
      setPendingItem(history.location.state.pending);
    }
    GET(`/api/listing/${lisningId}/pickup`).then((res) => {
      setLisiting(res.data);
    });
  }, []);

  // COnfirm handler, sends PUT request to change status of the listing from 'listed' to 'pending'
  const confirmHandler = () => {
    PUT(`/api/listing/${lisningId}/pending`).then((res) => {
      if (!res.failed) {
        history.push(`/success/order`);
      } else {
        alert("The problem occured, please try again");
      }
    });
  };

  const cancelOrderHandler = () => {
    PUT(`/api/listing/${lisningId}/listed`).then((res) => {
      if (!res.failed) {
        history.push(`/success/cancelOrder`);
      } else {
        alert("The problem occured, please try again later");
      }
    });
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
                    alt="picture of the product"
                  />
                </Col>
                <Col className="p-0 listing_details_information ">
                  <h5>{listing.product}</h5>
                  <span>$ {listing.price.toFixed(2)}</span>
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
                    <span>{`${listing.phone.slice(0, 3)}-${listing.phone.slice(
                      3,
                      6
                    )}-${listing.phone.slice(6)}`}</span>
                  </div>
                </div>
                <p className="sellers_address">
                  Please pick up your purchase at <mark>{listing.address}</mark>
                  , {listing.region}, Alberta
                </p>
              </div>
              <Button
                className={
                  purchased
                    ? "contact_seller_button soldStatus"
                    : "contact_seller_button"
                }
              >
                Contact Seller
              </Button>
              {!purchased && (
                <Button className="confirm_button" onClick={confirmHandler}>
                  Confirm
                </Button>
              )}
              {pendingItem && (
                <Button
                  className="confirm_button mt-5 mb-5"
                  onClick={cancelOrderHandler}
                >
                  Cancel Order
                </Button>
              )}
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Pickup;
