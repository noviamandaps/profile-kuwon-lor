import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fasilitas from './Pages/Fasilitas';
import Galeri from './Pages/Galeri';
import Home from './Pages/Home';
import Infografis from './Pages/Infografis';
import Pemerintahan from './Pages/Pemerintahan';
import Sejarah from './Pages/Sejarah';
import UMKM from './Pages/UMKM';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pemerintahan" element={<Pemerintahan/>}/>
        <Route path="/infografis" element={<Infografis/>}/>
        <Route path="/umkm" element={<UMKM/>}/>
        <Route path="/fasilitas" element={<Fasilitas/>}/>
        <Route path="/galeri" element={<Galeri/>}/>
        <Route path="/sejarah" element={<Sejarah/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;