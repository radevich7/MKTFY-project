import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Col, Row, Container } from "reactstrap";

import "./ListingCarousel.css";

const ListingCarousel = (props) => {
  const carouselItemsRef = useRef();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    props.images[selectedImageIndex].url
  );
  useEffect(() => {
    setSelectedImage(props.images[selectedImageIndex].url);
  }, [selectedImageIndex]);

  const handleSelectedImageChange = (index) => {
    setSelectedImageIndex(index);
    let el = document.getElementById(index);
    scrollTo(el);
  };
  const scrollTo = (el) => {
    const elTop = el.offsetTop + el.offsetHeight;
    const parentTop = el.parentNode.offsetTop + el.parentNode.offsetHeight;

    //Check for my element not in the view
    if (elTop >= parentTop + el.parentNode.scrollTop) {
      el.parentNode.scroll({ top: elTop - parentTop, behavior: "smooth" });
    } else if (elTop <= el.parentNode.offsetTop + el.parentNode.scrollTop) {
      el.parentNode.scroll({
        top: el.offsetTop - el.parentNode.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleUpClick = () => {
    if (props.images.length > 0 && props.images) {
      let newIndex = selectedImageIndex - 1;
      if (newIndex < 0) {
        newIndex = props.images.length - 1;
      }
      handleSelectedImageChange(newIndex);
      if (carouselItemsRef.current[newIndex]) {
        carouselItemsRef.current[newIndex].scrollIntoView({
          inline: "center",
          behavior: "smooth",
        });
      }
    }
    // imageRef.current.scrollIntoView();
    // scrollImageView.current.scrollIntoView();
    // scrollIntoView();

    //
  };
  const handleDownClick = () => {
    if (props.images.length > 0 && props.images) {
      let newIndex = selectedImageIndex + 1;
      if (newIndex >= props.images.length) {
        newIndex = 0;
      }
      handleSelectedImageChange(newIndex);
    }

    // scrollImageView.current.scrollIntoView();
    // scrollToMyRef();
  };

  return (
    <Fragment>
      <Container className="carousel-container " fluid>
        <Col className="carousel col-md-2 col-1">
          <Row className="arrow">
            <IoIosArrowUp onClick={handleUpClick} />
          </Row>
          <Row className="carousel__images d-none d-md-inline">
            {props.images &&
              props.images.map((image, index) => (
                <div
                  // onClick={() => handleSelectedImageChange(idx)}
                  style={{ backgroundImage: `url(${image.url})` }}
                  key={image.id}
                  src={image.url}
                  className={`carousel__image ${
                    selectedImageIndex === index && "carousel__image-selected"
                  }`}
                  onClick={() => {
                    handleSelectedImageChange(index);
                  }}
                  id={index}
                  ref={carouselItemsRef}
                />
              ))}
          </Row>
          <Row className="arrow bottom">
            <IoIosArrowDown onClick={handleDownClick} />
          </Row>
        </Col>
        <Col
          className="selected-image"
          style={{ backgroundImage: `url(${selectedImage})` }}
        >
          <div className="slide_number">
            {selectedImageIndex + 1} of {props.images.length}
          </div>
        </Col>
      </Container>
    </Fragment>
  );
};

export default ListingCarousel;
