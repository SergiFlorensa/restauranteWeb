import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoBack from '../assets/elConcepto.mp4';
import volverAtras from '../assets/volverAtras.svg';

const ElConcepto: React.FC = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };
  return (
    <div className="relative min-h-screen w-full overflow-y-auto ">
      <video 
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoBack} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className='absolute top-4 left-4 z-20 p-2 rounded-full bg-white bg-opacity-40 transition duration-300 cursor-pointer' onClick={handleBackClick}>
        <img src={volverAtras} className=' w-8 h-8'/>
    </div>

      <div className="relative z-10 flex flex-col items-center text-white p-8 space-y-8 font-fuenteDescripcion">
        <h1 className="text-4xl font-bold mb-4">El Concepto</h1>
        <p className="mt-4 text-lg mb-8 max-w-2xl text-center">
          Bienvenido a nuestro restaurante, un lugar donde la tradición argentina cobra vida. Con raíces profundas en la cultura de las brasas, nuestro chef argentino trae su pasión y experiencia a cada plato.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto font-fuenteDescripcion">
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-2 ">Raíces Argentinas</h2>
            <p className="text-lg">
              Nuestra cocina está inspirada en las ricas tradiciones culinarias de Argentina. Desde los cortes de carne seleccionados hasta los métodos de cocción al fuego, cada detalle está pensado para ofrecer una experiencia auténtica.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg font-fuenteDescripcion">
            <h2 className="text-3xl font-semibold mb-2">Nuestro Chef</h2>
            <p className="text-lg">
              Con una trayectoria impresionante en la gastronomía, nuestro chef argentino ha perfeccionado el arte de la parrilla. Su pasión por las brasas se refleja en cada creación, combinando técnicas tradicionales con un toque contemporáneo.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-2">Pasión por las Brasas</h2>
            <p className="text-lg">
              En el corazón de nuestra cocina está la parrilla, donde la magia sucede. Utilizamos solo las mejores maderas para ahumar y asar, realzando los sabores naturales de nuestros ingredientes.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-2">La Parrilla</h2>
            <p className="text-lg">
              La parrilla es más que una técnica de cocción; es una tradición que celebramos. Cada plato es una obra maestra, cocinada lentamente a la perfección para capturar los jugos y sabores inigualables de la carne.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ElConcepto;
