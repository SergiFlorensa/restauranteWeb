import React from 'react';
import MapComponent from './MapComponent';

const MapSection: React.FC = () => (
  <div className="map-container">
    <h1 className='justify-center flex text-center font-bold text-4xl font-FuenteDescripcion'>
      UBICACIÓN DEL RESTAURANTE
    </h1>
    <div className="map justify-center flex m-8">
      <MapComponent />
    </div>
  </div>
);

export default MapSection;
