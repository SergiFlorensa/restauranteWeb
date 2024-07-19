import React from 'react';
import logo from '../assets/LOGO.png'; // Ajusta el path según la ubicación de tu logo

const Header: React.FC = () => (
  <header className="bg-custom h-48 flex items-center justify-center">
    <img src={logo} alt="Logo restaurante" className="h-full object-contain" />
  </header>
);

export default Header;
