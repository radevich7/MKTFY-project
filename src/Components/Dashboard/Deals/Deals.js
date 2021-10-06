import React, { useRef, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
import "../Dashboard.css";

const Deals = (props) => {
  // //click and drag scroll effect
  const slider = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;
  let sliderClasses = "scroll_effect";

  useEffect(() => {
    //MouseDown
    slider.current.addEventListener("mousedown", handleMouseDown);
    slider.current.addEventListener("mouseleave", handleMouseLeave);
    slider.current.addEventListener("mouseup", handleMouseUp);
    slider.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      // clean up function to remove event listener
      slider.current.removeEventListener("mousedown", handleMouseDown);
      slider.current.removeEventListener("mouseleave", handleMouseLeave);
      slider.current.removeEventListener("mouseup", handleMouseUp);
      slider.current.removeEventListener("mousemove", handleMouseMove);
    };
  });
  // MOUSE DOWN
  const handleMouseDown = (e) => {
    isDown = true;
    sliderClasses = "items" + " active";
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
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
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll fast (1)
    slider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <React.Fragment>
      <Col lg="12">
        <Card>
          <CardBody>
            <span className="container_title">Deals for you</span>
            <Row>
              <div
                style={{ display: "flex" }}
                className={sliderClasses}
                ref={slider}
              >
                {props.items.map((item) => (
                  <Col lg="2" key={item.id} className="column_deals">
                    <Card className="mt-0 border-0 ">
                      <CardBody className="deals_card p-0 border-0">
                        {/* Content of the card */}
                        <div className="image_deals_container">
                          <CardImg
                            top
                            src={item.image}
                            alt={`The image shows ${item.title}`}
                            className="image_deals"
                          />
                        </div>
                        <CardTitle tag="h5" className="deals_title">
                          {item.title}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="deals_price">
                          $ {item.price.toFixed(2)}
                        </CardSubtitle>
                        {/* end card */}
                      </CardBody>
                    </Card>
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
