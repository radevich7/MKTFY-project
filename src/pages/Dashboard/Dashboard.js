import React, { useState, useEffect, useContext } from "react";
import { Container, Row } from "reactstrap";
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

import AppContext from "../../store/app-context";

const Dashboard = () => {
  const [store, dispatch] = useContext(AppContext);
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
  console.log(electronics);
  // Deals
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    setDeals(store.allListings);
  }, [store]);

  return (
    <Container fluid className="dashboard_container">
      <Row className="border_document_dashboard row">
        <Deals items={deals} />

        <Categories
          items={electronics}
          name={"Shop Electronics"}
          categoryId={3}
        />

        <Categories
          items={furniture}
          name={"Shop Furniture"}
          hide="d-none d-xl-block"
          categoryId={2}
        />

        <Deals items={deals} />
        <Categories items={realEstate} name={"Real Estate"} categoryId={4} />
        <Categories
          items={cars}
          name={"Shop Cars & Vehicles"}
          hide="d-none d-xl-block"
          categoryId={1}
        />
        <Banner />
      </Row>
      <Footer />
    </Container>
  );
};

export default Dashboard;
