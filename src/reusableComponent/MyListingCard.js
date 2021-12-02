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
    <Card className="d-flex flex-row border ">
      <Col lg="5">
        <CardImg
          alt="Card image cap"
          src={props.imageUrl}
          top
          width="100%"
          height="100%"
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
  );
};

export default MyListingCard;
