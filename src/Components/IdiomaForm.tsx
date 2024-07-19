import React, { useState, useRef, useEffect } from 'react';

interface IdiomaFormProps {
  onClose: () => void; // Definición de la función onClose
}

const IdiomaForm: React.FC<IdiomaFormProps> = ({ onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = () => {
    setIsDropdownOpen(false); // Cerrar el menú desplegable al seleccionar un idioma
    onClose(); // Llamar a la función onClose proporcionada por props
  };

  return (
    <div className="bg-gray-100 min-h-10 flex items-center justify-center font-FuenteDescripcion">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Seleccionar idioma
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={handleLanguageSelect} // Llamar a handleLanguageSelect al seleccionar un idioma
              >
                Español
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={handleLanguageSelect} // Llamar a handleLanguageSelect al seleccionar un idioma
              >
                English
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdiomaForm;
