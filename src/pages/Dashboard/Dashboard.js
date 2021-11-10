import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Footer from "./Footer/Footer";
import Categories from "./Categories/Categories";
import Banner from "./Banner/Banner";
import Deals from "./Deals/Deals";
import ipad from "../../assets/imagesForDahsboard/ipad.jpeg";
import iwatch from "../../assets/imagesForDahsboard/iwatch.webp";
import playstation from "../../assets/imagesForDahsboard/playstation.png";
import samsung from "../../assets/imagesForDahsboard/samsung.webp";
import "./Dashboard.css";
import axios from "axios";

const dummy_data = [
  {
    id: 1,
    title: "Playstation 4",
    price: 340,
    category: "electronics",
    image: playstation,
  },
  {
    id: 2,
    title: "Samsung TV",
    price: 970,
    category: "electronics",
    image: samsung,
  },
  {
    id: 3,
    title: "Ipad",
    price: 540,
    category: "electronics",
    image: ipad,
  },
  {
    id: 4,
    title: "Apple Watch 4",
    price: 720,
    category: "electronics",
    image: iwatch,
  },
  {
    id: 5,
    title: "Playstation 4",
    price: 340,
    category: "electronics",
    image: playstation,
  },
  {
    id: 6,
    title: "Samsung TV",
    price: 970,
    category: "electronics",
    image: samsung,
  },
  {
    id: 7,
    title: "Ipad",
    price: 540,
    category: "electronics",
    image: ipad,
  },
  {
    id: 8,
    title: "Apple Watch 4",
    price: 720,
    category: "electronics",
    image: iwatch,
  },
];

const Dashboard = () => {
  useEffect(() => {
    const AuthStr = "Bearer ".concat(localStorage.getItem("Auth_token"));
    axios
      .get(
        "http://mktfy-env.eba-6nx34qxt.ca-central-1.elasticbeanstalk.com/api/Listing",
        {
          Accept: "*/*",
          "Content-type": "application/json",
          Authorization: AuthStr,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  // Deals for the deals section
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    setDeals(dummy_data);
  }, []);

  // deals for the categories section
  const [categoriesDeals, setcategoriesDeals] = useState([]);
  useEffect(() => {
    setcategoriesDeals(dummy_data.filter((val) => val.id < 4));
  }, []);

  return (
    <Container fluid className="dashboard_container">
      <Row className="border_document_dashboard row">
        <Deals items={deals} />

        <Categories items={categoriesDeals} />

        <Categories items={categoriesDeals} hide="d-none d-xl-block" />

        <Deals items={deals} />
        <Categories items={categoriesDeals} />
        <Categories items={categoriesDeals} hide="d-none d-xl-block" />
        <Banner />
      </Row>
      <Footer />
    </Container>
  );
};

export default Dashboard;
