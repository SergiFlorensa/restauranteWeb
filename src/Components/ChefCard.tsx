import React from 'react';

const ChefCard: React.FC = () => (
  <div className="bg-cardChefBack text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl ml-25 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out font-fuenteDescripcion">
    <div className="md:flex">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Chef</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-white">Pablo Valenzuela</p>
        <p className="mt-2 text-gray-400">Con más de 15 años de experiencia en la gastronomía argentina, el Chef Pablo Valenzuela combina técnicas tradicionales con un toque contemporáneo para ofrecer platos únicos y memorables en Patio Criollo.</p>
      </div>
    </div>
  </div>
);

export default ChefCard;
