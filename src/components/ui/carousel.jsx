import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ImageCarousel({ images }) {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg" />
        </div>
      ))}
    </Carousel>
  );
}