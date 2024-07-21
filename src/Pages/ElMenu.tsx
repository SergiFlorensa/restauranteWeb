import React, { useState, useEffect } from 'react';



// Define la interfaz para el plato
interface Plato {
  id: number;
  categoria: string;
  nombre: string;
  descripcion?: string;
  precio: number;
}

const ElMenu: React.FC = () => {
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlatos();
  }, []);

  const fetchPlatos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/platos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Plato[] = await response.json();
      console.log(data); // Verifica que los datos se reciban correctamente
      setPlatos(data);
    } catch (error) {
      console.error('Error fetching platos:', error);
      setError('Error fetching platos.');
    }
  };

 

  return (
    <div className="p-8">

        

      <h1 className="text-3xl font-bold mb-6 text-center">La carta</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Muestra el mensaje de error si hay alguno */}
      <div className="overflow-x-auto">
        
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300">
            <tr>
              <th className="px-1 py-2 text-xs font-black text-gray-700 uppercase tracking-wider text-center lg:px-2 lg:text-sm">Categoría</th>
              <th className="px-1 py-2 text-xs font-black text-gray-700 uppercase tracking-wider text-center lg:px-2 lg:text-sm">Nombre</th>
              <th className="px-1 py-2 text-xs font-black text-gray-700 uppercase tracking-wider text-center lg:px-2 lg:text-sm">Descripción</th>
              <th className="px-1 py-2 text-xs font-black text-gray-700 uppercase tracking-wider text-center lg:px-2 lg:text-sm">Precio</th>
            </tr>
          </thead>
          <tbody className="bg-cartaBack divide-y divide-black ">

            
            {platos.length > 0 ? (
              platos.map((plato) => (
                <tr key={plato.id}>
                  <td className="px-2 py-2 whitespace-normal text-xs font-extrabold text-gray-900 text-center lg:px-2 lg:text-sm">{plato.categoria}</td>
                  <td className="px-2 py-2 whitespace-normal text-xs text-infoBack text-center lg:px-2 lg:text-sm">{plato.nombre}</td>
                  <td className="px-2 py-2 whitespace-normal text-xs text-infoBack break-words text-center lg:px-2 lg:text-sm">{plato.descripcion ?? ''}</td>
                  <td className="px-2 py-2 whitespace-normal text-xs font-medium text-infoBack text-center lg:px-2 lg:text-sm">{plato.precio.toFixed(2)} €</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-2 py-2 text-center text-sm text-gray-500">No hay platos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElMenu;
