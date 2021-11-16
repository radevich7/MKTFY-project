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
import { GET } from "../../api/api";

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
  const [deals, setDeals] = useState([]);

  let url = "/api/Listing";
  useEffect(() => {
    let isMounted = true;
    GET(url).then((res) => {
      if (!res.failed && isMounted) {
        setDeals(res.data);
        console.log(res.data);
      } else {
        // show message error to the user
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Deals for the deals section

  // useEffect(() => {
  //   setDeals(dummy_data);
  // }, []);

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
