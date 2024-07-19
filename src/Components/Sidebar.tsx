import React, { useState } from 'react';
import horarioIcon from '../assets/horarioSide.png';
import idiomaIcon from '../assets/idiomaSide.png';
import reservaIcon from '../assets/reservaSide.png';
import ContactForm from './ContactForm'; // Importar el componente ContactForm
import HorarioForm from './HorarioForm'; // Importar el componente HorarioForm
import IdiomaForm from './IdiomaForm'; // Importar el componente IdiomaForm

const Sidebar: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleOpenPopup = (popupType: string) => {
    setActivePopup(popupType);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  return (
    <div className="flex flex-col h-full p-3 w-40 bg-marronSide dark:text-gray-800 font-bold font-FuenteDescripcion mb-14 rounded-3xl m-3 mt-16">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <button
                onClick={() => handleOpenPopup('chat')}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img
                  src={reservaIcon}
                  alt="Chat"
                  className="w-6 h-6 fill-current dark:text-gray-600"
                />
                <span>Reserva</span>
              </button>
            </li>

            <li className="rounded-sm">
              <button
                onClick={() => handleOpenPopup('horario')}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img
                  src={horarioIcon}
                  alt="Horario"
                  className="w-6 h-6 fill-current dark:text-gray-600"
                />
                <span>Horario</span>
              </button>
            </li>

            <li className="rounded-sm">
              <button
                onClick={() => handleOpenPopup('idioma')}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img
                  src={idiomaIcon}
                  alt="Idioma"
                  className="w-6 h-6 fill-current dark:text-gray-600"
                />
                <span>Idioma</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {activePopup === 'chat' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div className="font-sans">
            <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
              <ContactForm onClose={handleClosePopup} />
            </div>
          </div>
        </div>
      )}

      {activePopup === 'horario' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div className="font-sans">
            <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
              <HorarioForm onClose={handleClosePopup} />
            </div>
          </div>
        </div>
      )}

      {activePopup === 'idioma' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div className="font-sans">
            <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
              <IdiomaForm onClose={handleClosePopup} />
            </div>
          </div>
        </div>
      )}

      {/* Agregar otros formularios emergentes aquí */}
    </div>
  );
};

export default Sidebar;
