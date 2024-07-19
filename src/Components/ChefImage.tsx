import React from 'react';
import chefImage from '../assets/chef.jpg'; // Ajusta la ruta según corresponda

const ChefImage: React.FC = () => (
  <div className="w-full sm:w-1/2 px-4">
    <img src={chefImage} alt="Imagen del chef" className="h-auto w-full rounded-lg shadow-lg sm:max-w-md" />
  </div>
);

export default ChefImage;
