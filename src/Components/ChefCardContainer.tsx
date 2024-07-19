import React from 'react';
import ChefCard from './ChefCard';
import ChefImage from './ChefImage';

const ChefCardContainer: React.FC = () => (
  <div className="flex flex-col items-center m-6 ml-3">
    {/* Estructura con medidas responsivas */}
    <div className="flex flex-col sm:flex-row mt-6">
      <div className="sm:w-1/2 px-4 flex items-center lg:ml-72">
        <ChefCard />
      </div>
      <div className="sm:w-1/2 px-4 mt-4 sm:mt-0">
        <ChefImage />
      </div>
    </div>
  </div>
);

export default ChefCardContainer;
