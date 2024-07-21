import React from 'react';
import Card from './Card';

const CardContainer: React.FC = () => (
  <div className="flex justify-center items-center mt-2 text-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 mx-2 text-justify">
      <Card title="El concepto" content="" route="/el-concepto" />
      <Card title="El equipo" content="" route="/el-equipo" />
      <Card title="El menú" content="" route="/el-menu" />
      <Card title="El espacio" content="" route="/el-espacio" />
    </div>
  </div>
);

export default CardContainer;
