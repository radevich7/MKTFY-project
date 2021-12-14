import { useEffect, useState } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import { LoadingSpinner } from "../../reusableComponent/Spinner";
import { GET, PUT } from "../../api/api";
import noimage from "../../assets/noimage.png";
import "./Pickup.css";

const Pickup = () => {
  let history = useHistory();
  const [listing, setLisiting] = useState(null);
  // Check if status  is either purchased or pending, set states to value otherwise to null
  const [purchasedItem, setPurchasedItem] = useState(
    history.location.state ? history.location.state.purchased : null
  );
  const [pendingItem, setPendingItem] = useState(
    history.location.state ? history.location.state.pending : null
  );
  // Getting id
  const id = useParams();
  const listingId = Object.values(id).toString();

  // Making a call to get a listing from the backend
  useEffect(() => {
    GET(`/api/listing/${listingId}/pickup`).then((res) => {
      console.log(res.data);
      setLisiting(res.data);
    });
  }, []);

  console.log(listing);
  // Confirm handler, sends PUT request to change status of the listing from 'listed' to 'pending'
  const confirmHandler = () => {
    PUT(`/api/listing/${listingId}/pending`).then((res) => {
      if (!res.failed) {
        history.push(`/success/order`);
      } else {
        alert("The problem occured, please try again");
      }
    });
  };

  // const cancelOrderHandler = () => {
  //   PUT(`/api/listing/${listingId}/listed`).then((res) => {
  //     if (!res.failed) {
  //       history.push(`/success/cancelOrder`);
  //     } else {
  //       alert("The problem occured, please try again later");
  //     }
  //   });
  // };

  return (
    <>
      {!listing ? (
        <LoadingSpinner />
      ) : (
        <Container fluid className="pickup_container">
          <Card className="border_document_pickup ">
            {purchasedItem || pendingItem ? (
              <div className="page_path">
                <Link to="/home/purchases" className="link_home">
                  <span>My Purchase</span>
                </Link>
                <span className="arrow_path">{">"}</span>

                <span>Pickup Information</span>
              </div>
            ) : (
              <div className="page_path">
                <Link to="/home" className="link_home">
                  <span>home</span>
                </Link>
                <span className="arrow_path">{">"}</span>
                <Link to={`/post/${listingId}`} className="link_home">
                  <span>product listing</span>
                </Link>
                <span className="arrow_path"> {">"} </span>
                <Link to={`/post/${listingId}/checkout`} className="link_home">
                  <span>Checkout</span>
                </Link>
                <span className="arrow_path"> {">"} </span>
                <span>Pickup Information</span>
              </div>
            )}

            <CardBody className="pickup_card ">
              <h4>Pickup Information</h4>
              <Row className="listing_details m-0">
                <Col className="listing_details_img">
                  <img
                    src={listing.imageUrl ? listing.imageUrl : noimage}
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
              <Button className="contact_seller_button">Contact Seller</Button>
              {/* {pendingItem && (
                <Button className="confirm_button" onClick={confirmHandler}>
                  Cancel Order
                </Button>
              )} */}
              {!purchasedItem && !pendingItem ? (
                <Button className="confirm_button" onClick={confirmHandler}>
                  Confirm
                </Button>
              ) : (
                ""
              )}
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Pickup;
