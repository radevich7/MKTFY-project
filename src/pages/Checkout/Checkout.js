import "./Checkout.css";
import { Link, useParams, useRouteMatch, Redirect } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import dummy_img from "../../assets/imagesForDahsboard/playstation.png";
import AppContext from "../../store/app-context";
import { useContext, useEffect } from "react";

const Checkout = () => {
  const [store, dispatch] = useContext(AppContext);
  let match = useRouteMatch();
  const { lisningId } = useParams();
  let listing = store.choosenListing;

  // console.log(store.choosenListing);
  // useEffect(() => {
  //   if (store.choosenListing.length === 0) {
  //     return <Redirect to={"/home"} />;
  //   }
  // }, [store.choosenListing]);

  return (
    <Container fluid className="checkout_container">
      <Card className="border_document_checkout">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path">{">"}</span>
          <Link to={`/post/${lisningId}`} className="link_home">
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
                src={listing.images[0].url}
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
  );
};

export default Checkout;
