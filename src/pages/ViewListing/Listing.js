import "./Listing.css";
import { useEffect, useState } from "react";

import { Link, useRouteMatch, useParams } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Row, Col, Card, CardBody, Carousel } from "reactstrap";
import logo_listing_user from "../../assets/listing_logo.svg";
import ListingCarousel from "./ListingCarousel";

const Listing = (props) => {
  let match = useRouteMatch();

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

  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      id: 2,
      url: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      id: 3,
      url: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      id: 4,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
  ]);

  return (
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
              <ListingCarousel images={images} />
            </Col>

            {/* Second column - item details*/}

            <Col className="p-0">
              <Card className="item_details_card">
                <CardBody>
                  <Col>
                    <h2>{item.productName}</h2>
                  </Col>
                  <Col>
                    <span>$ {item.price}</span>
                  </Col>
                  <Col>
                    <Link to={`${match.url}/checkout`}>
                      <Button className="item_details_button">
                        I want this!
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <h3>Details</h3>
                  </Col>
                  <Col>
                    <p>{item.description}</p>
                  </Col>
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
  );
};

export default Listing;
