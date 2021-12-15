import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  CardImg,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Footer from "./Footer/Footer";
import Categories from "./Categories/Categories";
import Banner from "./Banner/Banner";
import Deals from "./Deals/Deals";
import electronicsImage1 from "../../assets/electronics1.jpeg";
import electronicsImage2 from "../../assets/electronics2.jpeg";
import electronicsImage3 from "../../assets/electronics3.jpeg";
import furnitureImage1 from "../../assets/furnitureImage1.jpeg";
import furnitureImage2 from "../../assets/furnitureImage2.jpeg";
import furnitureImage3 from "../../assets/furnitureImage3.jpeg";
import realEstate1 from "../../assets/realEstate1.jpeg";
import realEstate2 from "../../assets/realEstate2.jpeg";
import realEstate3 from "../../assets/realEstate3.jpeg";

import carImage1 from "../../assets/car1.jpeg";
import carImage2 from "../../assets/car2.jpeg";
import carImage3 from "../../assets/car3.jpeg";
import "./Dashboard.css";
import { Spinner } from "reactstrap";
import AppContext from "../../store/app-context";

const Dashboard = () => {
  const [store, dispatch] = useContext(AppContext);
  // Deals
  const [deals, setDeals] = useState([]);
  console.log(deals);
  useEffect(() => {
    setDeals(store.allListings);
  }, [store]);

  // Categories
  let electronics = [
    { id: 1, image: electronicsImage1 },
    { id: 2, image: electronicsImage3 },
    { id: 3, image: electronicsImage2 },
  ];
  let furniture = [
    { id: 1, image: furnitureImage1 },
    { id: 2, image: furnitureImage3 },
    { id: 3, image: furnitureImage2 },
  ];
  let realEstate = [
    { id: 1, image: realEstate1 },
    { id: 2, image: realEstate2 },
    { id: 3, image: realEstate3 },
  ];
  let cars = [
    { id: 1, image: carImage1 },
    { id: 2, image: carImage2 },
    { id: 3, image: carImage3 },
  ];

  console.log(deals.map((item) => item.images[0]));

  return (
    <>
      {!deals ? (
        <Spinner />
      ) : (
        <Container fluid className="dashboard_container">
          <Row className="border_document_dashboard row d-none d-lg-flex">
            <Deals items={deals.slice(0, 7)} />

            <Categories
              items={electronics}
              name={"Shop Electronics"}
              categoryId={3}
              hide="d-none d-md-block"
            />

            <Categories
              items={furniture}
              name={"Shop Furniture"}
              hide="d-none d-xl-block"
              categoryId={2}
            />

            <Deals items={deals.slice(-7)} hide="d-none d-md-block" />
            <Categories
              items={realEstate}
              name={"Real Estate"}
              hide="d-none d-md-block"
              categoryId={4}
            />
            <Categories
              items={cars}
              name={"Shop Cars & Vehicles"}
              hide="d-none d-xl-block"
              categoryId={1}
            />
            <Banner />
          </Row>
          <Row className="border_document_dashboard row d-flex justify-content-around d-lg-none ">
            {deals.map((item) => (
              <Col lg="2" key={item.id} className="column_deals">
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
            ))}
          </Row>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
