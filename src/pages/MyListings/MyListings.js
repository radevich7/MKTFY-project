import { useState, useEffect, Fragment } from "react";
import { Container, CardBody, Row, Col, CardGroup } from "reactstrap";
// import dummy_img from "../../assets/imagesForDahsboard/playstation.png";
// import { GoPrimitiveDot } from "react-icons/go";

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
      if (res.failed === false) {
        console.log("running1");
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
      } else {
        console.log("nothing");
      }
    });
  }, []);

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
          <div className="border_document_myListings">
            <h1 className="myListing_header">My Listings</h1>
            <div>
              <span className={activeItemsClass} onClick={toggleActiveSold}>
                Active Items
              </span>
              <span className={soldItemsClass} onClick={toggleActiveSold}>
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
                      key={listing.id}
                      id={listing.id}
                      imageUrl={listing.imageUrl}
                      product={listing.product}
                      price={listing.price}
                      pending={true}
                    />
                  );
                })}
                <h2 className="mt-5 mb-5">AVAILABLE ITEMS</h2>
                {listed.length > 0 ? (
                  listed.map((listing) => {
                    return (
                      <MyListingCard
                        key={listing.id}
                        id={listing.id}
                        imageUrl={listing.imageUrl}
                        product={listing.product}
                        price={listing.price}
                        listed={true}
                      />
                    );
                  })
                ) : (
                  <p className="">You don't have any offers</p>
                )}
              </CardGroup>
            )}

            {/* SOLD ITEMS */}
            {!activeSold && (
              <CardGroup
                className="d-flex flex-column"
                style={{ maxWidth: "808px" }}
              >
                {sold.length > 0 ? (
                  sold.map((listing) => {
                    return (
                      <MyListingCard
                        key={listing.id}
                        imageUrl={listing.imageUrl}
                        product={listing.product}
                        price={listing.price}
                        id={listing.id}
                        sold={true}
                      />
                    );
                  })
                ) : (
                  <p className="centered">You don't have any sold products</p>
                )}
              </CardGroup>
            )}
          </div>
        </Container>
      )}
    </Fragment>
  );
};

export default MyListings;
