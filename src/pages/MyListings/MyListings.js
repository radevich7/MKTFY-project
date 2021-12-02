import { useState, useEffect, Fragment } from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardGroup,
} from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";
import { GoPrimitiveDot } from "react-icons/go";

import "./MyListings.css";
import { LoadingSpinner } from "../../reusableComponent/Spinner";

import { GET } from "../../api/api";
import MyListingCard from "../../reusableComponent/MyListingCard";
const MyListings = () => {
  const [pending, setPending] = useState();
  const [sold, setSold] = useState();
  const [listed, setListed] = useState();
  const [loading, setLoading] = useState(true);
  // Active or sold items state change
  const [activeSold, setActiveSold] = useState(true);
  const toggleActiveSold = () => setActiveSold(!activeSold);

  useEffect(() => {
    GET("/api/mylisting").then((res) => {
      if (!res.failed) {
        let pending = res.data.filter(
          (listing) => listing.transactionStatus === "pending"
        );
        setPending(pending);
        let listed = res.data.filter(
          (listing) => listing.transactionStatus === "listed"
        );
        setListed(listed);

        let sold = res.data.filter(
          (listing) => listing.transactionStatus === "sold"
        );
        setSold(sold);
        setLoading(false);
      }
    });
  }, []);
  console.log(pending);

  const activeItemsClass = activeSold
    ? "myListings_items active"
    : "myListings_items";
  const soldItemsClass = !activeSold
    ? "myListings_items active sold_item"
    : "myListings_items sold_item";

  return (
    <Fragment>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container fluid className="myListings_container">
          <LoadingSpinner />
          <div className="border_document_myListings">
            <h1>My Listings</h1>
            <div>
              <span className={activeItemsClass} onClick={toggleActiveSold}>
                Active Items
              </span>
              <span className={soldItemsClass} onClick={toggleActiveSold}>
                <GoPrimitiveDot className="sold_dot" />
                Sold Items
              </span>
            </div>
            {/* ACTIVE ITEMS */}
            {activeSold && (
              <CardGroup
                className="d-flex flex-column"
                style={{ maxWidth: "808px" }}
              >
                {pending.map((listing) => {
                  return (
                    <MyListingCard
                      imageUrl={listing.imageUrl}
                      product={listing.product}
                      price={listing.price}
                    />
                  );
                })}
                <h2 className="mt-5 mb-5">AVAILABLE ITEMS</h2>
                {listed.map((listing) => {
                  return (
                    <MyListingCard
                      imageUrl={listing.imageUrl}
                      product={listing.product}
                      price={listing.price}
                    />
                  );
                })}
              </CardGroup>
            )}

            {/* SOLD ITEMS */}
            {!activeSold && (
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
          </div>
        </Container>
      )}
    </Fragment>
  );
};

export default MyListings;
