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
  const sliderRef = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;
  let sliderClasses = "scroll_effect";

  useEffect(() => {
    //MouseDown
    sliderRef.current.addEventListener("mousedown", handleMouseDown);
    sliderRef.current.addEventListener("mouseleave", handleMouseLeave);
    sliderRef.current.addEventListener("mouseup", handleMouseUp);
    sliderRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      // clean up function to remove event listener
      sliderRef.current.removeEventListener("mousedown", handleMouseDown);
      sliderRef.current.removeEventListener("mouseleave", handleMouseLeave);
      sliderRef.current.removeEventListener("mouseup", handleMouseUp);
      sliderRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  });
  // MOUSE DOWN
  const handleMouseDown = (e) => {
    isDown = true;
    sliderClasses = "items" + " active";
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
      <Col lg="12">
        <Card>
          <CardBody>
            <span className="container_title">Deals for you</span>

            <Row>
              <div
                className={sliderClasses}
                ref={sliderRef}
                style={{ display: "flex" }}
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
