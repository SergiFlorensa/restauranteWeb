import React from 'react';

const InfoSection: React.FC = () => (
  <div className="flex justify-center mt-4 text-center font-FuenteDescripcion">
    <div className="flex flex-col lg:flex-row items-start w-full lg:w-2/3 justify-center">
      <div className="w-full lg:w-1/2 p-4 bg-infoBack border-r border-gray-300 shadow-3d">
        <h2 className="text-3xl font-bold text-black mb-4">INFORMACIÓN GENERAL</h2>
        <ul className="text-lg text-gray-800">
          <li className="mb-2">
            <strong className="text-gray-600">Cocina:</strong> <br /> Moderna, Mediterránea
          </li>
          <li className="mb-2">
            <strong className="text-gray-600">Tipo de Negocio:</strong> <br /> Cocina argentina y vinos
          </li>
          <li className="mb-2">
            <strong className="text-gray-600">Servicios:</strong> <br /> Acceso a Discapacitados, Privatización, Acceso WiFi
          </li>
          <li className="mb-2">
            <strong className="text-gray-600">Métodos de Pago:</strong> <br /> Efectivo, Visa
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 p-4 border-t border-r border-b lg:border-cardChefBack border-cardChefBack border-l-0 rounded-r-lg lg:mt-20 mt-8">
        <h2 className="text-3xl font-bold text-black mb-4">HORARIO DE APERTURA</h2>
        <ul className="text-lg text-gray-800">
          <li className="mb-2">
            <strong className="text-gray-600">Mié-Dom:</strong> 12:00 - 16:00 <br></br> 20:00 - 23:00
          </li>
          <li className="mb-2">
            <strong className="text-gray-600">Lunes y Martes:</strong> Cerrado
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default InfoSection;
