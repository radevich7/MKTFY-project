import { useRef, useState } from "react";
import { Fragment } from "react";

import "./ListingCarousel.css";

const ListingCarousel = (props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // let currentImg = props.images[selectedImageIndex].url;
  const [selectedImage, setSelectedImage] = useState(props.images[0].url);

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
  };
  return (
    <Fragment>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel__images">
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
                  // ref={carouselItemsRef}
                />
              ))}
          </div>
        </div>
        <div
          className="selected-image"
          style={{ backgroundImage: `url(${selectedImage})` }}
        />
      </div>
    </Fragment>
  );
};

export default ListingCarousel;
