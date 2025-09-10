import React from "react";
import "./image-carousel.css";

interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix = "Image" }) => {
  // On duplique la liste pour l'effet infini
  const allImages = [...images, ...images];
  return (
    <div className="carousel-outer">
      <div className="carousel-track">
        {allImages.map((src, idx) => (
          <div className="carousel-item" key={idx}>
            <img src={src} alt={`${altPrefix} ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
