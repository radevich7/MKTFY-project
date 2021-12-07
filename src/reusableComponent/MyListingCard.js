import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "../pages/MyListings/MyListings.css";

const MyListingCard = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(props.dateSold + "Z");
  let day = date.getDay().toString().padStart(2, "0");
  let month = date.getMonth();
  let monthLetters = months[month];
  let year = date.getFullYear();

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={
        props.getContactInfo
          ? {
              pathname: `/post/${props.id}/checkout/pickupConfirmation`,

              state: {
                purchased: props.purchased,
                pending: props.pending,
              },
            }
          : props.sold
          ? "#"
          : {
              pathname: `/update`,
              state: {
                listingId: `${props.id}`,
                listed: props.listed,
                pending: props.pending,
              },
            }
      }
    >
      <Card className="d-flex flex-row  mb-2">
        <span
          className={
            props.sold
              ? "status_tag sold"
              : props.pending
              ? "status_tag pending"
              : ""
          }
        >
          {props.sold ? "SALE CONFIRMED" : props.pending ? "PENDING STATE" : ""}
        </span>
        <Col lg="5">
          <CardImg
            alt="Card image cap"
            src={props.imageUrl}
            top
            style={{ height: "214px", objectFit: "cover" }}
          />
        </Col>

        <CardBody
          className="d-flex flex-column justify-content-center"
          style={{ height: "214px" }}
        >
          {props.dateSold && (
            <span className="time_output">{`${monthLetters} ${day} ${year} `}</span>
          )}
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
