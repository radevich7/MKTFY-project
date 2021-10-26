import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Col, Row } from "reactstrap";

import "./ListingCarousel.css";

const ListingCarousel = (props) => {
  const imageRef = useRef();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    props.images[selectedImageIndex].url
  );
  useEffect(() => {
    setSelectedImage(props.images[selectedImageIndex].url);
  }, [selectedImageIndex]);

  const handleSelectedImageChange = (index) => {
    setSelectedImageIndex(index);
    //   setSelectedImage(e.target.src);
    //   setSelectedImageIndex(e.target.id);
    //   console.log(index);
    // console.log(carouselItemsRef.current.slice(0, selectedImage.length));
    // console.log(e.target.url);
    // if (props.images && props.images.length > 0) {
    //   setSelectedImage(props.images[newIdx]);
    //   setSelectedImageIndex(newIdx);
    //   if (carouselItemsRef?.current[newIdx]) {
    //     carouselItemsRef?.current[newIdx]?.scrollIntoView({
    //       inline: "center",
    //       behavior: "smooth",
    //     });
    //   }
    // };
    //   className={`carousel__image ${
    // selectedImageIndex === index && "carousel__image-selected"
    // imageRef.current.scrollIntoView();
  };

  const handleUpClick = () => {
    if (props.images.length > 0 && props.images) {
      let newIndex = selectedImageIndex - 1;
      if (newIndex < 0) {
        newIndex = props.images.length - 1;
      }
      handleSelectedImageChange(newIndex);
    }
    // imageRef.current.scrollIntoView();
    // scrollImageView.current.scrollIntoView();
    // scrollIntoView();
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
  };

  return (
    <Fragment>
      <Row className="carousel-container">
        <Col className="carousel" lg="2">
          <Row className="arrow">
            <IoIosArrowUp onClick={handleUpClick} />
          </Row>
          <Row className="carousel__images">
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
                  ref={imageRef}
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
        />
      </Row>
    </Fragment>
  );
};

export default ListingCarousel;
