import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../MainPageContent/MainPageContent.css";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import { GET } from "../../api/api";
const MainPageContent = () => {
  const [category, setCategory] = useState([]);
  const id = useParams();
  const listingId = Object.values(id).toString();

  const url = `/api/listing/category/${listingId}`;
  useEffect(() => {
    GET(url).then((res) => console.log(res));
    // setCategory(store.allListings.filter((val) => val.categoryId == listingId));
  }, [listingId]);
  console.log(category);
  return (
    <Container fluid className="mainContent_container">
      <Row className="border_document_mainContent">
        {category.map((item) => (
          <Col lg="2" key={item.id} className="column_deals">
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: `/post/${item.id}` }}
            >
              <Card className="mt-0 border-0 ">
                <CardBody className="deals_card p-0 border-0">
                  {/* Content of the card */}
                  <div className="image_deals_container">
                    <CardImg
                      top
                      src={item.images[0].url}
                      alt={`The image shows ${item.product}`}
                      className="image_deals"
                    />
                  </div>
                  <h5 className="deals_title">{item.product}</h5>
                  <CardSubtitle tag="h6" className="deals_price">
                    $ {item.price.toFixed(2)}
                  </CardSubtitle>
                  {/* end card */}
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainPageContent;
