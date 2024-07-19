import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/portadarest.jpg';
import img2 from '../assets/combiandoCarneCarr.jpg';
import img3 from '../assets/arrozCarneCarr.jpg';

const ImageCarousel: React.FC = () => (
  <div className="carousel-container mb-8 sm:mb-0"> {/* Añade margen inferior */}
  <Carousel showThumbs={false} infiniteLoop autoPlay className="h-120">
    <div>
      <img src={img1} alt="Imagen 1" className="h-full w-full object-cover" />
    </div>
    <div>
      <img src={img2} alt="Imagen 2" className="h-full w-full object-cover" />
    </div>
    <div>
      <img src={img3} alt="Imagen 3" className="h-full w-full object-cover" />
    </div>
  </Carousel>
</div>
);

export default ImageCarousel;
