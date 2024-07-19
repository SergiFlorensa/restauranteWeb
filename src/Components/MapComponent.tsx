import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const MapComponent: React.FC = () => {
  return (
    <MapContainer center={[41.15342214988812, 1.101738811943721]} zoom={13} style={{ height: "500px", width: "50%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[41.15342214988812, 1.101738811943721]}>
        <Popup>
          Restaurante Patio Criollo, Pg. de Prim, 5, 43202 Reus, Tarragona
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
