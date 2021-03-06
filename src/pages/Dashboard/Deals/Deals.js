import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from "reactstrap";
import "../Dashboard.css";

const Deals = (props) => {
  // //click and drag scroll effect
  const sliderRef = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;
  let sliderClasses = "scroll_effect";

  useEffect(() => {
    // console.log(props.deals);
  }, [props.deals]);

  useEffect(() => {
    let currentSliderRef = sliderRef.current;
    //MouseDown
    sliderRef.current.addEventListener("mousedown", handleMouseDown);
    sliderRef.current.addEventListener("mouseleave", handleMouseLeave);
    sliderRef.current.addEventListener("mouseup", handleMouseUp);
    sliderRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      // clean up function to remove event listener
      currentSliderRef.removeEventListener("mousedown", handleMouseDown);
      currentSliderRef.removeEventListener("mouseleave", handleMouseLeave);
      currentSliderRef.removeEventListener("mouseup", handleMouseUp);
      currentSliderRef.removeEventListener("mousemove", handleMouseMove);
    };
  });
  // MOUSE DOWN
  const handleMouseDown = (e) => {
    isDown = true;
    sliderClasses = "items active";
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  //MOUSE LEAVE
  const handleMouseLeave = () => {
    isDown = false;
    sliderClasses = "items";
  };

  //MOUSE UP
  const handleMouseUp = () => {
    isDown = false;
    sliderClasses = "items";
  };

  // MOUSE MOVE

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll fast (1)
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <React.Fragment>
      <Col lg="12" className={props.hide}>
        <Card className="dealsCard">
          <CardBody>
            <span className="container_title">Deals for you</span>

            <Row>
              <div
                className={`${sliderClasses} dashboardListing`}
                ref={sliderRef}
                style={{ display: "flex" }}
              >
                {props.items.map((item) => (
                  <Col lg="2" key={item.id} className="column_deals ">
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
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Deals;
