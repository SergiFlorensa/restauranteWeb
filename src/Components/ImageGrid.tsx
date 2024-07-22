import React, { useState } from 'react';
import image1 from '../assets/milanesa.jpg';
import image2 from '../assets/tomahawk.jpg';
import image3 from '../assets/empanadillas.jpg';
import image4 from '../assets/entraña1-2.jpg';
import image5 from '../assets/pulpoparri.jpg';
import image6 from '../assets/carpaccio.jpg';

const data = [
  {
    imageLink: image1,
    title: 'Milanesa',
    description:
      'La milanesa es un filete de vacuno que se reboza y se elabora frito en una sartén. Sin embargo, es posible encontrar variantes al horno, de pollo o de berenjena.',
  },
  {
    imageLink: image2,
    title: 'Tomahawk',
    description:
      'El tomahawk es un corte de carne de res con hueso que se caracteriza por su largo hueso en forma de hacha. Es ideal para parrillas y asados.',
  },
  {
    imageLink: image3,
    title: 'Empanadillas',
    description:
      'Las empanadillas son pequeñas empanadas rellenas que se hornean o fríen. Son populares en varias culturas y se pueden rellenar de diferentes ingredientes.',
  },
  {
    imageLink: image4,
    title: 'Entraña',
    description:
      'La entraña es un corte de carne vacuna muy sabroso y jugoso. Se cocina a la parrilla y se corta en tiras finas para servir.',
  },
  {
    imageLink: image5,
    title: 'Pulpo a la parrilla',
    description:
      'El pulpo a la parrilla es un plato tradicional en varias cocinas mediterráneas. Se cocina lentamente en la parrilla para obtener un sabor único y textura tierna.',
  },
  {
    imageLink: image6,
    title: 'Carpaccio',
    description:
      'El carpaccio es un plato italiano de finas láminas de carne cruda o pescado marinado. Se sirve generalmente como aperitivo o entrante.',
  },
];

const ImageGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-10 gap-5 mx-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.imageLink}
              alt={`Image ${index + 1}`}
              className="w-full h-full rounded-lg object-cover"
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white rounded-lg p-4">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="hidden lg:block text-sm text-center">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
