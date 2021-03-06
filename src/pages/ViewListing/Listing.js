import { useState, useEffect } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { GET } from "../../api/api";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./Listing.css";

// COMPONENTS
import Button from "../../reusableComponent/Button";
import ListingCarousel from "./ListingCarousel";
import { LoadingSpinner } from "../../reusableComponent/Spinner";

const Listing = () => {
  const [listing, setListing] = useState(null);
  // GETTING ID FROM THE ROUTE PATH
  let match = useRouteMatch();
  const id = useParams();
  const listingId = Object.values(id).toString();

  // GETTING LISTING FROM THE BACKEND API
  useEffect(() => {
    let mount = true;
    GET(`/api/listing/${listingId}/seller`).then((res) => {
      if (res.failed === false) {
        setListing(res.data);
      }
    });
    return () => {
      mount = false;
    };
  }, []);

  const seller_logo = listing && listing.sellerFullName.slice(0, 1);

  return (
    <>
      {!listing ? (
        <LoadingSpinner />
      ) : (
        <Container fluid className="listing_container">
          <Card className="border_document_listing">
            <div className="listingPage_path">
              <Link to="/home" className="link_home">
                <span>home</span>
              </Link>
              <span className="arrow_path"> {">"} </span>
              <span>product listing</span>
            </div>
            <CardBody className="p-0">
              <Row className="m-0 d-flex justify-content-lg-center">
                {/* First column -carousel*/}
                <Col className="p-0 col-xxl-6 col-xl-7 col-lg-8 col-12">
                  <ListingCarousel images={listing.images} />
                </Col>

                {/* Second column - item details*/}

                <Col className="p-0 col-xxl-6 col-12 ">
                  <Card className="item_details_card ">
                    <CardBody className="">
                      <h2 className="listing_product">{listing.product}</h2>

                      <p className="listing_price">$ {listing.price}</p>

                      <Link to={`${match.url}/checkout`}>
                        <Button className="item_details_button">
                          I want this!
                        </Button>
                      </Link>

                      <h3>Details</h3>

                      <p>{listing.details}</p>

                      <Col>
                        <div className="sellers_info">
                          <div className="seller_logo">
                            <span>{seller_logo}</span>
                          </div>
                          <span>
                            <h4>{listing.sellerFullName} </h4>
                            <div className="sellers_number_of_listings">
                              <div>
                                <h4>{listing.sellerTotalNumListings}</h4>
                                <h5>listings</h5>
                              </div>
                            </div>
                          </span>
                        </div>
                      </Col>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Listing;
