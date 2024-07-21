import React from 'react';

const IntroSection: React.FC = () => (
  <div>
    <div className="py-3 flex justify-center mt-3 items-center">
      <h1 className="text-8xl font-bold text-black text-center font-fuenteTitulo">Patio Criollo</h1>
    </div>
    <div className="px-8 text-center mb-8 flex justify-center items-center text-justify">
      <p className="text-lg text-gray-800 font-FuenteDescripcion">
        "Patio Criollo" evoca la tradición y la autenticidad de la cocina criolla, una fusión de sabores y técnicas culinarias que reflejan la rica herencia cultural de Latinoamérica. La palabra "Patio" remite a un espacio familiar y acogedor, donde se comparten momentos especiales alrededor de una buena comida. Por otro lado, "Criollo" se refiere a lo nativo, lo autóctono, representando las raíces profundas y arraigadas de la gastronomía local.
      </p>
    </div>
  </div>
);

export default IntroSection;
