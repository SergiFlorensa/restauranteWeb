import React from 'react';
import Logoins from '../assets/instafoot.png';

const Footer: React.FC = () => (
  <footer className="bg-footerBack font-FuenteDescripcion">
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-100 sm:text-5xl">"Ven y disfruta con nosotros"</h2>
        <p className="mx-auto mt-4 max-w-sm text-gray-100">
          "Disfruta de una comida deliciosa en un ambiente acogedor y familiar, donde cada visita es una nueva oportunidad para crear recuerdos inolvidables."
        </p>
       {/* Botón de Volver arriba */}
       <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300"
        >
          <span>Volver arriba</span>
        </button>
      </div>

      <div className="mt-10 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-20">
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <a href="#" className="text-gray-300 transition hover:opacity-75">Términos & Condiciones</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 transition hover:opacity-75">Privacidad y Política</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 transition hover:opacity-75">Cookies</a>
          </li>
        </ul>

        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          <li>
            <a
      href="https://www.instagram.com"
      rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>
              <img src={Logoins} alt="Instagram" className="h-6 w-6" />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
