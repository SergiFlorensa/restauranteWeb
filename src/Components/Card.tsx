import React from 'react';
import { useNavigate } from 'react-router-dom';
import madera from '../assets/madera.png'; // Ajusta la ruta según la ubicación de tu imagen

interface CardProps {
  title: string;
  content: string;
  route: string;
}

const Card: React.FC<CardProps> = ({ title, content, route }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden w-full sm:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold text-white font-FuenteDescripcion"
      style={{
        backgroundImage: `url(${madera})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => navigate(route)}
    >
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-black-transparent transition-all duration-500"></div>
      <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-black-transparent transition-all duration-500">
        {content}
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase p-2">
        {title}
      </div>
    </div>
  );
};

export default Card;
