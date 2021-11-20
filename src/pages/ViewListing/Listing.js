import "./Listing.css";
import { useState, useContext, useEffect } from "react";
import AppContext from "../../store/app-context";

import { Link, useRouteMatch, useParams } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Row, Col, Card, CardBody, Carousel } from "reactstrap";
import logo_listing_user from "../../assets/listing_logo.svg";
import ListingCarousel from "./ListingCarousel";
import { GET } from "../../api/api";
import UseIsMountedRef from "../../reusableComponent/UseIsMountedRef";

const Listing = (props) => {
  const [listing, setListing] = useState();
  const [user, setUser] = useState([]);
  const useIsMountedRef = UseIsMountedRef();
  let match = useRouteMatch();
  const id = useParams();
  const listingId = Object.values(id).toString();

  useEffect(() => {
    let mounted = true;

    GET(`/api/Listing/${listingId}`).then((res) => {
      if (!res.failed) {
        // useIsMountedRef used to check if component is actually mounted before performing a state update.
        if (useIsMountedRef.current) {
          setListing(res.data);
          console.log(res.data.images);
        }
      } else {
        // show to user mistake
      }
    });
  }, []);

  const [item, setItem] = useState({
    id: 1,
    productName: "Microsoft Xbox One X 1TB Console",
    description: `The world’s most powerful console. The most powerful
  console ever, featuring 6 'Teraflops' of graphical
  processing power, 'true' 4K gaming, and compatibility with
  Xbox One games and accessories`,
    price: 340,
    firstName: "Matt",
    lastName: "Smith",
    numberOfListings: 2,
    profileImageUrl: "",
  });

  return (
    <>
      {listing && (
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
              <Row className="m-0">
                {/* First column -carousel*/}
                <Col className="p-0 col-xxl-6 col-xl-7 col-lg-8 col-12">
                  <ListingCarousel images={listing.images} />
                </Col>

                {/* Second column - item details*/}

                <Col className="p-0 d-flex align-items-center">
                  <Card className="item_details_card">
                    <CardBody>
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
                            <span>M</span>
                          </div>
                          <span>
                            <h4>{`${item.firstName} ${item.lastName}`} </h4>
                            <div className="sellers_number_of_listings">
                              <img src={logo_listing_user} alt="/" />
                              <div>
                                <h4>{item.numberOfListings}</h4>
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
