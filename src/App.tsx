import logo from './assets/LOGO.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './assets/fondofuego.jpg';
import img2 from './assets/fondofuego.jpg';
import img3 from './assets/fondofuego.jpg';
import chefImage from './assets/chef.jpg'; // Importar la imagen del chef
import Logoins from './assets/logo-instagram.svg';
import emailIcon from './assets/mail-open-outline.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import image1 from './assets/milanesa.jpg';
import image2 from './assets/tomahawk.jpg';
import image3 from './assets/empanadillas.jpg';
import image4 from './assets/entraña1-2.jpg';
import image5 from './assets/pulpoparri.jpg';
import image6 from './assets/carpaccio.jpg';




const ChefCard = () => (
  <div className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
    <div className="md:flex">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Hola!</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-white">Pablo Valenzuela</p>
        <p className="mt-2 text-gray-400">Con más de 15 años de experiencia en la gastronomía argentina, el Chef Pablo Valenzuela combina técnicas tradicionales con un toque contemporáneo para ofrecer platos únicos y memorables en Patio Criollo.</p>
      </div>
      <div className="flex items-center justify-between mt-4 space-x-4">
        <button className="text-red-500 hover:text-white" style={{ marginRight: '20px' }}>
          <svg id="heart" viewBox="0 0 47.5 47.5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="a">
                <path d="M0 38h38V0H0v38Z"></path>
              </clipPath>
            </defs>
            <g transform="matrix(1.25 0 0 -1.25 0 47.5)" clipPath="url(#a)">
              <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241" fill="#be1931"></path>
            </g>
          </svg>
          Like
        </button>
      </div>
    </div>
  </div>
);



const Card = ({ title, content }) => (
  <div className="relative overflow-hidden w-full sm:w-80 h-60 rounded-3xl cursor-pointer text-2xl font-bold bg-red-900">
    <div className="z-10 absolute w-full h-full peer"></div>
    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-black transition-all duration-500"></div>
    <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-black transition-all duration-500">
      {content}
    </div>
    <div className="w-full h-full items-center justify-center flex uppercase">
      {title}
    </div>
  </div>
);


const data = [
  {
    imageLink: image1,
  },
  {
    imageLink: image2,
  },
  {
    imageLink: image3,
  },
  {
    imageLink: image4,
  },
  {
    imageLink: image5,
  },
  {
    imageLink: image6,
  },
];






const InfoSection = () => (
  <div className="flex justify-center mt-4 text-center">
    <div className="flex flex-col lg:flex-row items-start w-full lg:w-2/3 justify-center">
      <div className="w-full lg:w-1/1 p-4 bg-gray-100 border-r border-gray-300 shadow-3d">
        <h2 className="text-3xl font-bold text-black mb-4 font-FuenteDescripcion">INFORMACIÓN GENERAL</h2>
        <ul className="text-lg text-gray-800 font-FuenteDescripcion">
          <li className="mb-2">
            <strong className="text-gray-400 font-FuenteDescripcion">Cocina</strong> <br></br> moderna, Mediterránea
          </li>
          <li className="mb-2">
            <strong className="text-gray-400 font-FuenteDescripcion">Tipo de Negocio:</strong> <br></br>Cocina argentina y vinos
          </li>
          <li className="mb-2">
            <strong className="text-gray-400 font-FuenteDescripcion">Servicios:</strong> <br></br>Acceso a Discapacitados, Privatización, Acceso WiFi
          </li>
          <li className="mb-2">
            <strong className="text-gray-400 font-FuenteDescripcion">Métodos de Pago:</strong> <br></br>Sin contacto, Efectivo, Visa, Tarjeta de Crédito
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/1 p-4 border-t border-r border-b border-emerald-200 border-l-0 rounded-r-lg font-FuenteDescripcion mt-24">
        <h2 className="text-3xl font-bold text-black mb-4">HORARIO DE APERTURA</h2>
        <ul className="text-lg text-gray-800">
        <li className="mb-2">
            <strong className="text-gray-400">Mie-Dom </strong> 12:00 - 16:00
          </li>

          <li className="mb-2">
            <strong className="text-gray-400">Domingo </strong> Cerrado
          </li>
        </ul>
      </div>
    </div>
  </div>
);


const MapComponent: React.FC = () => {
  return (
    <MapContainer center={[41.15342214988812, 1.101738811943721]} zoom={13} style={{ height: "500px", width: "50%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[41.15342214988812, 1.101738811943721]}>
        <Popup>
          Restaurante Patio Criollo, Pg. de Prim, 5, 43202 Reus, Tarragona
        </Popup>
      </Marker>
    </MapContainer>
  );
};


const Footer = () => (
  <footer className="bg-neutral-400 font-FuenteDescripcion">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">"Ven y Disfruta con Nosotros"</h2>
      <p className="mx-auto mt-4 max-w-sm text-black">
      "Disfruta de una comida deliciosa en un ambiente acogedor y familiar, donde cada visita es una nueva oportunidad para crear recuerdos inolvidables."
      </p>
      <a
        href="#"
        className="mt-8 inline-block rounded-full border border-black px-12 py-3 text-sm font-medium text-black hover:bg-red-900 hover:text-white focus:outline-none focus:ring active:bg-red-950"
      >
        Volver arriba
      </a>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
      <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">Términos & Condiciones</a>
        </li>
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">Privacidad y Política</a>
        </li>
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75">Cookies</a>
        </li>
      </ul>

      <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
      <li>
              <a
                href="www.instragram.com"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <img src={Logoins} alt="Instagram" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <img src={emailIcon} alt="Instagram" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <img src={Logoins} alt="Instagram" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <img src={Logoins} alt="Instagram" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
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

function App() {
  return (
    <>
      <header className="bg-maroon-900 h-48 flex items-center justify-center">
      <img src={logo} alt="Logo restaurante" className="h-full object-contain" />

      </header>
      
      <main className="p-0">
        <Carousel showThumbs={false} infiniteLoop autoPlay className="h-50">
          <div>
            <img src={img1} alt="Imagen 1" className="h-full w-full object-cover" />
          </div>
          <div>
            <img src={img2} alt="Imagen 2" className="h-full w-full object-cover" />
          </div>
          <div>
            <img src={img3} alt="Imagen 3" className="h-full w-full object-cover" />
          </div>
        </Carousel>

        <div className="py-8 flex justify-center">
          <h1 className="text-8xl font-bold text-black text-center font-fuenteTitulo">Patio criollo</h1>
        </div>


        <div className="px-8 text-center">
          <p className="text-lg text-gray-800 font-FuenteDescripcion">
          "Patio Criollo" evoca la tradición y la autenticidad de la cocina criolla, una fusión de sabores y técnicas culinarias que reflejan la rica herencia cultural de Latinoamérica. La palabra "Patio" remite a un espacio familiar y acogedor, donde se comparten momentos especiales alrededor de una buena comida. Por otro lado, "Criollo" se refiere a lo nativo, lo autóctono, representando las raíces profundas y arraigadas de la gastronomía local.
          </p>
        </div>



        <div className="flex justify-center items-center mt-8 bg-stone-300">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 ">
            <Card title="El concepto" content="" />
            <Card title="El equipo" content="" />
            <Card title="El menú" content="" />
            <Card title="El espacio" content="" />
          </div>
        </div>




        <div className="flex justify-center items-center mt-8 bg-slate-300">
          <div className="w-full sm:w-1/2 px-4">
            <ChefCard />
          </div>
          <div className="w-full sm:w-1/2 px-4">
            <img src={chefImage} alt="Imagen del chef" className="h-auto w-full rounded-lg shadow-lg sm:max-w-md" />
          </div>
        </div>



        <div className="w-full px-4 text-center justify-center mt-8 font-fuenteDescripcion">
            {/* Título y descripción de Especialistas en parrilla */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black font-FuenteDescripcion">Especialistas en parrilla</h2>
              <p className="mt-4 text-lg text-gray-800 font-FuenteDescripcion">
                Nuestro equipo de expertos en parrilla se dedica a preparar los mejores cortes de carne con técnicas tradicionales y un cuidado meticuloso.
              </p>
            </div>
          </div>


          <div className="container mx-auto py-12 max-w-5xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            style={{ animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s both` }}
          >
            <img
              src={item.imageLink}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );




          <InfoSection />


        <div className="p-4">
          {/* Contenido principal de la aplicación */}
        </div>


        <div className="flex flex-col h-full p-3 w-40 dark:bg-amber-200 dark:text-gray-800 font-FuenteDescripcion mb-4">
	<div className="space-y-3">
		<div className="flex-1">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
			
			
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
							<path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
							<path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
						</svg>
						<span>Chat</span>
					</a>
				</li>
				
			
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
							<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
							<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
						</svg>
						<span>Horario</span>
					</a>
				</li>
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
							<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
							<rect width="32" height="64" x="256" y="232"></rect>
						</svg>
						<span>Idioma</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	
</div>


<div className="map-container">
  <h1 className=' justify-center flex text-center font-bold text-5xl font-FuenteDescripcion'>Ubicación del Restaurante</h1>
  <div className="map justify-center flex m-8">
    <MapComponent />
  </div>
</div>


      </main>

      <Footer />

      
    </>
  );
}

export default App;
