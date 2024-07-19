import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './Components/Header';
import ImageCarousel from './Components/ImageCarousel';
import CardContainer from './Components/CardContainer';
import ChefCardContainer from './Components/ChefCardContainer';
import ImageGrid from './Components/ImageGrid';
import InfoSection from './Components/InfoSection';
import IntroSection from './Components/IntroSection';
import MapSection from './Components/MapSection';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import EspecialistasEnParrilla from './Components/EspecialistasEnParrilla';
import VideoModal from './Components/VideoModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ElConcepto from './Pages/ElConcepto';
import ElEquipo from './Pages/ElEquipo';
import ElEspacio from './Pages/ElEspacio';
import ElMenu from './Pages/ElMenu';
import './index.css';

function App() {
  
  return (
    <Router basename="/restauranteWeb">
      <Header />
      <main className="p-0 bg-beigePrincipal font-FuenteDescripcion">
        <Routes>
          <Route path="/" element={
            <>
              <ImageCarousel />
              <IntroSection />
              <CardContainer />
              <ChefCardContainer />
              <EspecialistasEnParrilla />
              <ImageGrid />
              <InfoSection />
              <Sidebar />
              <VideoModal />
              <MapSection />
            </>
          } />
          <Route path="/el-concepto" element={<ElConcepto />} />
          <Route path="/el-equipo" element={<ElEquipo />} />
          <Route path="/el-menu" element={<ElMenu />} />
          <Route path="/el-espacio" element={<ElEspacio />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
export default App;
