import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";

import "./ListingCarousel.css";

const ListingCarousel = (props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <Fragment>
      <div className="carousel-container">
        <div
          className="selected-image"
          // style={{ backgroundImage: `url(${selectedImage?.url})` }}
        />
        <div className="carousel">
          <div className="carousel__images">
            {props.images &&
              props.images.map((image, idx) => (
                <div
                  onClick={() => handleSelectedImageChange(idx)}
                  style={{ backgroundImage: `url(${image.url})` }}
                  key={image.id}
                  className={`carousel__image ${
                    selectedImageIndex === idx && "carousel__image-selected"
                  }`}
                  ref={(el) => (carouselItemsRef.current[idx] = el)}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListingCarousel;
