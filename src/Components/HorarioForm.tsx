// HorarioForm.tsx
import React from 'react';

const HorarioForm: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md font-FuenteDescripcion">
    <h2 className="text-2xl font-semibold mb-6">Horario</h2>
    <p className="text-gray-700">Proximamente.</p>
    {/* Agregar contenido específico del formulario de horario si es necesario */}
    <button
      className="bg-footerBack text-white px-4 py-2 rounded-md mt-4 hover:bg-green-800 focus:outline-none focus:shadow-outline-blue"
      onClick={onClose}
    >
      Cerrar
    </button>
  </div>
);

export default HorarioForm;
