import React from "react";
import "./Carousel.scss";

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.length > 0 ? (
        images.map((img, index) => (
          <img key={index} src={img} alt={`Product ${index}`} className="carousel__image" />
        ))
      ) : (
        <p className="carousel__empty">No hay imágenes aún.</p>
      )}
    </div>
  );
};

export default Carousel;
