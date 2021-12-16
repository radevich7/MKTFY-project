import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../../store/app-context";
import { Card, CardImg, CardBody, Col, Row } from "reactstrap";
import { GET } from "../../../api/api";
import "../Dashboard.css";

const Categories = (props) => {
  const [store, dispatch] = useContext(AppContext);
  const history = useHistory();
  // BY CLICK ON THE CATEGORY SETTING CONTEXT STORE TO THE CHOSEN CATEGORY
  const categoryHandler = (category) => {
    GET(`/api/listing/category/${category}?region=${store.user.city}`).then(
      (res) => {
        if (!res.failed) {
          if (res.data.length > 0) {
            dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: res.data });
          } else {
            dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: null });
          }
          // Pushing to the content page and setting the state to search
          history.push("/content", { state: "search" });
        } else {
          alert("Something went wrong, please try again later");
        }
      }
    );
  };
  return (
    <React.Fragment>
      <Col className={`mb-4 mt-4 ${props.hide} xl-6 lg-12`}>
        <Card>
          <CardBody className="">
            <span className="container_title">{props.name}</span>
            <Row className="space-between">
              {props.items.map((item) => (
                <Col lg="4" key={item.id} className="column_categories p-0 ">
                  <Card className="border-0 categories_card">
                    {/* Content of the card */}
                    <CardImg
                      top
                      src={item.image}
                      alt={`The image shows ${item.title}`}
                      className="image_deals"
                    />

                    {/* end card */}
                  </Card>
                </Col>
              ))}
            </Row>
            <span
              className="explore_link_button link b-0"
              onClick={(e) => {
                categoryHandler(props.categoryId);
              }}
              style={{ cursor: "pointer" }}
            >
              Explore Now
            </span>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default React.memo(Categories);
