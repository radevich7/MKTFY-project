import React from "react";
import { Card } from "reactstrap";
import appStoreLogo from "../../../assets/banner/appStoreImg.svg";
import googlePlayLogo from "../../../assets/banner/googlePlayImg.svg";
import banner from "../../../assets/banner/banner.png";

const Banner = () => {
  return (
    <Card
      style={{
        // padding: "0px",
        backgroundImage: `url(${banner})`,
        height: "510px",
        // maxWidth: "1636px",
      }}
    ></Card>
  );
};

export default Banner;
