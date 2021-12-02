import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const MyListingCard = (props) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/update`,
        state: { listingId: `${props.id}` },
      }}
    >
      <Card className="d-flex flex-row  mb-2">
        <Col lg="5">
          <CardImg
            alt="Card image cap"
            src={props.imageUrl}
            top
            style={{ height: "214px" }}
          />
        </Col>

        <CardBody
          className="d-flex flex-column justify-content-center"
          style={{ height: "214px" }}
        >
          <CardTitle tag="h5" className="product_name">
            {props.product}
          </CardTitle>
          <CardSubtitle className="pt-4 product_price" tag="h6">
            $ {props.price.toFixed(2)}
          </CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MyListingCard;
