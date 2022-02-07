import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "../../store/app-context";
import "../MainPageContent/MainPageContent.css";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import { GET } from "../../api/api";
const MainPageContent = () => {
  const [store, dispatch] = useContext(AppContext);
  const history = useHistory();
  const [listings, setListings] = useState();

  useEffect(() => {
    //checking the state of the path, if its from search set Listings to the search ones
    if (history.location.state) {
      setListings(store.searchListings);
    } else {
      setListings(store.allListings);
    }
  }, [store.searchListings]);

  return (
    <Container fluid className="mainContent_container">
      <Row
        className="border_document_mainContent  justify-content-xl-start justify-content-center
      "
      >
        {listings ? (
          listings.map((item) => (
            <Col
              lg="2"
              key={item.id}
              className="column_deals d-flex justify-content-start  "
            >
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: `/post/${item.id}` }}
              >
                <Card className="mt-0 border-0 deals_card">
                  <CardImg
                    top
                    src={item.images[0].url}
                    alt={`The image shows ${item.product}`}
                    className="image_deals"
                    top
                    width="100%"
                  />
                  <CardBody className="p-0 deals_cardBody border-0 d-flex flex-column justify-content-between">
                    {/* Content of the card */}

                    <CardTitle className="deals_title">
                      {item.product}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="deals_price">
                      $ {item.price.toFixed(2)}
                    </CardSubtitle>

                    {/* end card */}
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p className="centered">No result found</p>
        )}
      </Row>
    </Container>
  );
};

export default MainPageContent;
