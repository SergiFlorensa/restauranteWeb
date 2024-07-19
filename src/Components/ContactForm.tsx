import React from 'react';

const ContactForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario de contacto (enviar mensajes, etc.)
    onClose(); // Cierra la ventana emergente después de enviar el formulario
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Haz una reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=""
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Personas</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder=""
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-footerBack text-white px-4 py-2 rounded-md hover:bg-teal-950 focus:outline-none focus:shadow-outline-blue"
        >
          Reservar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
