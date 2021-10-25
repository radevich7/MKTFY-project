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

  const [images, setImages] = useState();

  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`,
      }))
    );
  }, []);

  return (
    <Container fluid className="listing_container">
      <Card className="border_document_listing">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>product listing</span>
        </div>
        <CardBody>
          <Row className="w-100" className="border">
            {/* First column -carousel*/}
            <Col lg="6">
              {/* <Row>
                <Col lg="2" className="border">
                  Hello
                </Col>
                <Col lg="10" className="border">
                  Hello2
                </Col>
              </Row> */}
              <ListingCarousel images={images} />
            </Col>

            {/* Second column - item details*/}

            <Col className="border">
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
