import React from "react";
import { Card } from "reactstrap";
import appStoreLogo from "../../../assets/banner/appStoreImg.svg";
import googlePlayLogo from "../../../assets/banner/googlePlayImg.svg";
import banner from "../../../assets/banner/banner.png";

const Banner = () => {
  return (
    <Card className="card_banner">
      <div style={{ backgroundImage: `url(${banner})` }} className="banner">
        <h2 className="banner_header">Bring your market with you</h2>
        <p className="banner_text">
          Buy and sell on our MKTFY app while you're on the go!
        </p>
        <img
          src={googlePlayLogo}
          alt="Google Play logo"
          className="googlePlayLogo"
        />
        <img src={appStoreLogo} alt="App Store logo" className="appStoreLogo" />
      </div>
    </Card>
  );
};

export default Banner;
